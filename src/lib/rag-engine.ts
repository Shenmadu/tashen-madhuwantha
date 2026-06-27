import { GoogleGenAI } from "@google/genai";
import { Chunk } from "./knowledge-base";
import embeddingsCache from "./embeddings-cache.json";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

interface CacheEntry {
  chunk: Chunk;
  embedding: number[];
}

const cache = embeddingsCache as CacheEntry[];

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot  += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function embedQuery(text: string): Promise<number[]> {
  const res = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
    config: { taskType: "RETRIEVAL_QUERY" } as never,
  });
  return res.embeddings![0].values!;
}

async function retrieveRelevantChunks(query: string, topK = 3): Promise<Chunk[]> {
  const queryEmbedding = await embedQuery(query);

  const scored = cache.map(({ chunk, embedding }) => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, embedding),
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => s.chunk);
}

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