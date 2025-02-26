// src/components/DominoGame.tsx
"use client";

import { useState } from "react";
import {
  defaultDominoes,
  countDoubleNumbers,
  sortDominoes,
  removeDuplicates,
  flipCards,
  removeByTotal
} from "@/utils/dominoUtils";

export default function DominoGame() {
  const [dominoes, setDominoes] = useState(defaultDominoes);
  const [removeValue, setRemoveValue] = useState("");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dominoes</h1>
      <div className="border p-2 mb-2">
        <strong>Source</strong>
        <div className="text-sm">{JSON.stringify(dominoes)}</div>
      </div>
      <div className="border p-2 mb-4">
        <strong>Double Numbers</strong>
        <div>{countDoubleNumbers(dominoes)}</div>
      </div>
      <div className="grid grid-cols-6 gap-2 mb-4">
        {dominoes.map(([a, b], index) => (
          <div key={index} className="p-2 border rounded text-center w-10">
            <div>{a}</div>
            <hr />
            <div>{b}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setDominoes(sortDominoes(dominoes, "asc"))}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Sort (ASC)
        </button>
        <button
          onClick={() => setDominoes(sortDominoes(dominoes, "desc"))}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Sort (DESC)
        </button>
        <button
          onClick={() => setDominoes(flipCards(dominoes))}
          className="p-2 bg-green-500 text-white rounded"
        >
          Flip
        </button>
        <button
          onClick={() => setDominoes(removeDuplicates(dominoes))}
          className="p-2 bg-red-500 text-white rounded"
        >
          Remove Dup
        </button>
        <button
          onClick={() => setDominoes(defaultDominoes)}
          className="p-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Input Number"
          value={removeValue}
          onChange={(e) => setRemoveValue(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => setDominoes(removeByTotal(dominoes, parseInt(removeValue) || 0))}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
