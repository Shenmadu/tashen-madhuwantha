import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal, Sparkles, AlertCircle, RefreshCw, Cpu } from 'lucide-react';
import { ChatMessage } from '@/app/types';

export default function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Developer Agent is ONLINE. I'm Tashen's virtual assistant. Ask me anything about his full stack experience, core libraries, statistics, or availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const presetPrompts = [
    "What is his preferred backend stack?",
    "Is he experienced with Cloud & Docker?",
    "How many years of experience does he have?",
    "Is he available for freelance hire?"
  ];

useEffect(() => {    
    if (messages.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    setErrorStatus(null);
    const userMsgId = `user-${Date.now()}`;
    const newMsg: ChatMessage = {
      id: userMsgId,
      role: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInputVal('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) {
        throw new Error('Assistance server offline');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `assist-${Date.now()}`,
        role: 'assistant',
        text: data.reply || "Unable to retrieve responses at this time.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      setErrorStatus(err.message || "Network request failed");
      const errMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'error',
        text: "System communication failure. Please verify GEMINI_API_KEY is configured in Settings secrets panel, or try again shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errMessage]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        text: "Developer Agent is ONLINE. Ask me anything about Tashen's background, active stack, and solutions!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <div className="flex flex-col h-full rounded-[32px] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden min-h-[480px] backdrop-blur-md">
      
      {/* Terminal Title bar */}
      <div className="bg-[#0B0B0F]/80 border-b border-white/10 py-3.5 px-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Virtual light dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>
          <span className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/50">
            <Terminal className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>tashen_assistant_v1.0</span>
          </div>
        </div>
        <button
          onClick={clearChat}
          className="text-white/40 hover:text-white transition-colors cursor-pointer"
          title="Reset Console"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Messages Sandbox Workspace */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[360px] min-h-[280px]">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          const isError = msg.role === 'error';
          
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[85%] ${
                isUser ? 'ml-auto' : 'mr-auto'
              }`}
            >
              {/* Role badge */}
              <span className={`font-mono text-[8px] tracking-widest uppercase mb-1 ${
                isUser ? 'text-white/40' : isError ? 'text-red-400' : 'text-[#8B5CF6]'
              }`}>
                {isUser ? 'USER_PROMPT' : 'AGENT_REPLY'} • {msg.timestamp}
              </span>
              
              {/* Message bubble */}
              <div
                className={`p-3.5 rounded-xl border font-sans text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 text-white border-white/10 font-medium'
                    : isError
                    ? 'bg-red-500/5 text-red-300 border-red-500/15'
                    : 'bg-white/5 text-white/80 border border-white/10'
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex flex-col items-start max-w-[80%]">
            <span className="font-mono text-[8px] tracking-widest text-[#8B5CF6] uppercase mb-1">
              AGENT_THINKING
            </span>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white/50 font-sans text-xs flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#06B6D4] animate-spin" />
              Compiling representation logs...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Preset prompts buttons bar */}
      <div className="p-4 pt-1.5 border-t border-white/10 text-left">
        <span className="block text-[8px] font-mono text-white/40 tracking-wider mb-2 uppercase">CHOOSE QUICK QUERY</span>
        <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto">
          {presetPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              disabled={loading}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-white/70 hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="p-3 bg-[#0B0B0F]/80 border-t border-white/10 flex items-center gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage(inputVal);
          }}
          disabled={loading}
          placeholder="Ask about Spring Boot, AWS, rates, projects..."
          className="flex-1 bg-[#0B0B0F]/50 border border-white/10 hover:border-white/20 focus:border-[#6366F1] rounded-xl py-2.5 px-3.5 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#6366F1]/50 text-white transition-colors placeholder-white/30"
        />
        <button
          onClick={() => handleSendMessage(inputVal)}
          disabled={loading || !inputVal.trim()}
          className="p-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white transition-all transform active:scale-95 disabled:opacity-50 disabled:translate-y-0 cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
