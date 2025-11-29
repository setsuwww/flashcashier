export function truncateWords(text: string, wordsCount: number): string {
  const words = text.trim().split(/\s+/)
  if (words.length <= wordsCount) return text
  return words.slice(0, wordsCount).join(' ') + '...'
}
