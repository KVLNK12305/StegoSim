'use client'; // You might need this if the page itself uses client features, otherwise optional if just importing
import dynamic from 'next/dynamic';

// 1. Dynamically import the Terminal component with SSR disabled
const Terminal = dynamic(() => import('@/components/Konsole'), {
  ssr: false,
  loading: () => <p>Loading Terminal...</p>, // Optional loading state
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-8">StegoSim Terminal</h1>
      <div className="w-full max-w-4xl border-2 border-gray-700 rounded-lg overflow-hidden bg-black">
         {/* 2. Use it normally here */}
         <Terminal />
      </div>
    </main>
  );
}