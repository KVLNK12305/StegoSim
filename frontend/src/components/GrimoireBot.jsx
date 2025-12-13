import { useState, useEffect } from 'react';
import { BookOpen, Sparkles, X, MessageSquare } from 'lucide-react';

export default function GrimoireBot() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("Welcome, Magic Knight. Type 'help' to access the spells.");
  
  // Rotating hints (Simulating an AI Guide)
  const hints = [
    "Try running 'ls' to scan the directory.",
    "The 'steghide' command reveals hidden secrets.",
    "Beware of the honeypot protocols.",
    "I detect a weak firewall on port 80...",
    "Your mana (RAM) is stable."
  ];

  // Auto-change hints every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHint = hints[Math.floor(Math.random() * hints.length)];
      setMessage(randomHint);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* 1. The Chat Bubble (Only visible if open) */}
      {isOpen && (
        <div className="mb-4 mr-2 bg-zinc-900/90 border border-purple-500/50 p-3 rounded-lg rounded-br-none max-w-xs backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)] pointer-events-auto transition-all animate-in fade-in slide-in-from-bottom-2">
            <div className="flex justify-between items-start mb-1">
                <span className="text-purple-400 text-[10px] font-bold tracking-widest uppercase">Grimoire AI</span>
                <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                    <X size={12} />
                </button>
            </div>
            <p className="text-xs text-zinc-300 font-mono leading-relaxed border-l-2 border-purple-500 pl-2">
                {message}
            </p>
        </div>
      )}

      {/* 2. The Floating Avatar (Click to toggle chat) */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group cursor-pointer pointer-events-auto animate-float"
      >
        {/* The Spirit Orb */}
        <div className="w-12 h-12 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform bg-gradient-to-br from-zinc-900 to-purple-900/20">
            <Sparkles size={20} className="text-purple-400 animate-pulse" />
        </div>

        {/* The Floating Grimoire (Book) */}
        <div className="absolute -left-8 top-2 grimoire-glow">
            <BookOpen size={24} className="text-purple-300 rotate-12" />
        </div>

        {/* Particle Effects (Decorative dots) */}
        <div className="absolute -top-2 right-0 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
      </div>
    </div>
  );
}