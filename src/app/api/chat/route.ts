import { NextRequest, NextResponse } from "next/server";
import { ragAnswer } from "@/lib/rag-engine";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const answer = await ragAnswer(message);
    return NextResponse.json({ answer });

  } catch (error: unknown) {
    // Rate limit — friendly message
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      (error as { status: number }).status === 429
    ) {
      return NextResponse.json(
        { answer: "I'm getting too many requests right now. Please try again in a minute! ⏳" },
        { status: 200 } // return 200 so chatbot shows the message nicely
      );
    }

    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}