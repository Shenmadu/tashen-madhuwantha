import { GoogleGenAI } from "@google/genai";
import { knowledgeBase, Chunk } from "./knowledge-base";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

// ── Types ────────────────────────────────────────────────────────────────────
interface ScoredChunk {
  chunk: Chunk;
  score: number;
}

// ── Pre-computed cache (server memory — built once on first request) ─────────
let embeddingCache: { chunk: Chunk; embedding: number[] }[] | null = null;

// ── Helpers ──────────────────────────────────────────────────────────────────
function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot  += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function embedText(text: string, taskType: string): Promise<number[]> {
  const res = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
    config: { taskType } as never,
  });
  return res.embeddings![0].values!;
}

// ── Build cache (called once) ─────────────────────────────────────────────────
async function buildCache() {
  if (embeddingCache) return; // already built

  console.log("⚙️  Building embedding cache for", knowledgeBase.length, "chunks...");

  // Batch: embed all chunks sequentially with small delay to avoid rate limits
  const results: { chunk: Chunk; embedding: number[] }[] = [];

  for (const chunk of knowledgeBase) {
    const embedding = await embedText(chunk.content, "RETRIEVAL_DOCUMENT");
    results.push({ chunk, embedding });
    // Small delay to respect rate limits
    await new Promise((r) => setTimeout(r, 200));
  }

  embeddingCache = results;
  console.log("✅ Embedding cache ready!");
}

// ── Retrieve top-K ────────────────────────────────────────────────────────────
async function retrieveRelevantChunks(
  query: string,
  topK: number = 3
): Promise<Chunk[]> {
  await buildCache();

  const queryEmbedding = await embedText(query, "RETRIEVAL_QUERY");

  const scored: ScoredChunk[] = embeddingCache!.map(({ chunk, embedding }) => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, embedding),
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => s.chunk);
}

// ── Main export ───────────────────────────────────────────────────────────────
export async function ragAnswer(question: string): Promise<string> {
  const chunks = await retrieveRelevantChunks(question);
  const context = chunks.map((c) => c.content).join("\n\n");

  const prompt = `You are a helpful AI assistant for Tashen's developer portfolio website.
Answer questions about Tashen based ONLY on the context below.
If the answer is not in the context, say "I don't have that information."
Be concise and friendly.

Context:
${context}

Question: ${question}

Answer:`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text!;
}

// Pre-warm cache on module load (optional — removes first-request delay)
buildCache().catch(console.error);