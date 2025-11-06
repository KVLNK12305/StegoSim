"use client";
import { useEffect, useRef } from 'react';
import { Terminal as Xterm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    // 1. Initialize Xterm
    const term = new Xterm({
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#00ff00', // Hacker green text 🕶️
      },
    });
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

      // 2. Render it into the div
      term.open(terminalRef.current);

      // FIX: Wrap fit() in a timeout to wait for the DOM to be ready
      setTimeout(() => {
          fitAddon.fit();
      }, 0)

    // 3. Write a welcome message
    term.writeln('Welcome to StegoSim v1.0.0');
    term.write('$ ');

    // 4. Basic local echoing (so you can see what you type)
    // Later, we will remove this and let the backend handle echoing
    term.onData((data) => {
        // If Enter is pressed
        if (data.charCodeAt(0) === 13) {
            term.writeln('');
            term.write('$ ');
        } else {
            term.write(String(data));
        }
    });

    // Cleanup on unmount
    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{ width: '100%', height: '500px', padding: '10px', backgroundColor: '#000' }}
    />
  );
}