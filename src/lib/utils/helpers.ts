export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function extractFirstParagraph(markdown: string): string {
  const firstParagraph = markdown.split('\n\n')[0]
  return firstParagraph.replace(/^#+\s+/gm, '') // Remove headings
}