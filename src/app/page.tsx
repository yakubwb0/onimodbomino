"use client";

import DominoGame from "@/components/DominoGame";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Dominoes</h1>
      <DominoGame />
    </main>
  );
}
