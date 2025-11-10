// Assumptions: Utility to count word frequencies
// [NX-42-R]

export function countWordFrequency(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, '') // elimina signos y puntuación
    .split(/\s+/)
    .filter(Boolean);

  const frequency = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1]); // orden descendente
} // Count words!!!
