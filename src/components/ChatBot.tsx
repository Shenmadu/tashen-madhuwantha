"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! Ask me anything about my projects, skills, or experience 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg: Message = {
        role: "assistant",
        content: data.answer || "Sorry, I couldn't get an answer.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error connecting. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center transition-shadow hover:shadow-blue-500/50"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[450px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm flex items-center gap-1">
                  Portfolio Assistant <Sparkles size={14} className="text-yellow-300" />
                </p>
                <p className="text-xs text-blue-100/80">Powered by Gemini + RAG</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Bot size={14} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-sm shadow-sm"
                        : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <Bot size={14} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1 shadow-sm">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-2 items-center bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1 pr-2 border border-transparent focus-within:border-blue-500/50 focus-within:bg-white dark:focus-within:bg-zinc-900 transition-all">
                <input
                  className="flex-1 text-sm px-3 py-2 bg-transparent text-zinc-800 dark:text-zinc-100 focus:outline-none"
                  placeholder="Ask something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="ml-0.5" />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}