export type Domino = [number, number];

// Default domino set
export const defaultDominoes: Domino[] = [
  [6, 1], [4, 3], [5, 1], [3, 4], [1, 1], [3, 4], [1, 2]
];

// Count double numbers
export const countDoubleNumbers = (dominoes: Domino[]): number => {
  return dominoes.filter(([a, b]) => a === b).length;
};

// Sort dominoes
export const sortDominoes = (dominoes: Domino[], order: "asc" | "desc"): Domino[] => {
  return [...dominoes].sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];
    return order === "asc" ? totalA - totalB : totalB - totalA;
  });
};

// Remove duplicate dominoes (same values in any order)
export const removeDuplicates = (dominoes: Domino[]): Domino[] => {
  const seen = new Set();
  return dominoes.filter(([a, b]) => {
    const key = a <= b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

// Flip all domino cards
export const flipCards = (dominoes: Domino[]): Domino[] => {
  return dominoes.map(([a, b]) => [b, a]);
};

// Remove dominoes with a specific total value
export const removeByTotal = (dominoes: Domino[], total: number): Domino[] => {
  return dominoes.filter(([a, b]) => a + b !== total);
};
