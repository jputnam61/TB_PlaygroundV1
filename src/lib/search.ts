export interface SearchResult {
  title: string;
  path: string;
  preview: string;
  matches: string[];
}

export function searchContent(searchTerm: string): SearchResult[] {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const term = searchTerm.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search in page content using data-search-content elements
  document.querySelectorAll('[data-search-content]').forEach((element) => {
    const content = element.textContent || '';
    const path = element.getAttribute('data-search-content') || '';
    const title = element.getAttribute('data-search-title') || path;

    // Find matches in content
    const contentLower = content.toLowerCase();
    if (contentLower.includes(term)) {
      // Extract preview around match
      const matchIndex = contentLower.indexOf(term);
      const start = Math.max(0, matchIndex - 40);
      const end = Math.min(content.length, matchIndex + 40);
      const preview = '...' + content.slice(start, end).trim() + '...';

      // Find all unique matches
      const matches = Array.from(new Set(
        content.match(new RegExp(term, 'gi')) || []
      ));

      results.push({
        title,
        path,
        preview,
        matches
      });
    }
  });

  return results;
}