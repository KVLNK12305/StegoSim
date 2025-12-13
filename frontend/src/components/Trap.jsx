import { useEffect, useState } from 'react';
import { Skull } from 'lucide-react';

export default function Trap({ active, onReset }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-red-600 animate-pulse">
      {/* Glitch Effect Text */}
      <h1 className="text-9xl font-black tracking-tighter mb-4 glitch-text">
        TRAP TRIGGERED
      </h1>
      <Skull size={120} className="mb-8 animate-bounce" />
      <p className="text-2xl font-mono text-center max-w-2xl px-4">
        ILLEGAL OPERATION DETECTED.<br/>
        IP ADDRESS LOGGED.<br/>
        SYSTEM LOCKDOWN INITIATED.
      </p>
      
      {/* Reset Button (For Debugging) */}
      <button 
        onClick={onReset}
        className="mt-12 px-8 py-3 border border-red-600 hover:bg-red-600 hover:text-black font-mono transition-colors uppercase tracking-widest"
      >
        Disengage Protocol
      </button>
      
      {/* Audio Element for the BAAAH (Optional) */}
      {/* <audio src="/baaaah.mp3" autoPlay loop /> */}
    </div>
  );
}