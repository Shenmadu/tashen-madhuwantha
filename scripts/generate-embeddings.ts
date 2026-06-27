import { GoogleGenAI } from "@google/genai";
import { knowledgeBase } from "../src/lib/knowledge-base";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

async function embedText(text: string): Promise<number[]> {
  const res = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
    config: { taskType: "RETRIEVAL_DOCUMENT" } as never,
  });
  return res.embeddings![0].values!;
}

async function main() {
  console.log(`⚙️  Generating embeddings for ${knowledgeBase.length} chunks...`);

  const results = [];

  for (let i = 0; i < knowledgeBase.length; i++) {
    const chunk = knowledgeBase[i];
    console.log(`  [${i + 1}/${knowledgeBase.length}] ${chunk.id}`);

    const embedding = await embedText(chunk.content);
    results.push({ chunk, embedding });

    // Rate limit avoid
    await new Promise((r) => setTimeout(r, 300));
  }

  const outputPath = path.join(process.cwd(), "src/lib/embeddings-cache.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`✅ Done! Saved to src/lib/embeddings-cache.json`);
}

main().catch(console.error);