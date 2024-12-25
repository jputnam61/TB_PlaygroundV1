import { useState, useCallback } from 'react';
import { searchContent } from '@/lib/search';
import { highlightText } from '@/lib/highlight';

export function useSearch() {
  const [searchResults, setSearchResults] = useState<Array<{
    section: string;
    items: Array<{
      title: string;
      path: string;
      searchTerm: string;
      preview?: string;
    }>;
  }>>([]);

  const handleSearch = useCallback((searchTerm: string) => {
    if (!searchTerm || searchTerm.length < 3) {
      setSearchResults([]);
      return;
    }

    const results = searchContent(searchTerm);
    setSearchResults(results);
  }, []);

  const handleSelect = useCallback((path: string, searchTerm: string) => {
    const targetElement = document.querySelector(`[data-search-content="${path}"]`);
    if (targetElement) {
      // First scroll to element
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Then highlight matching text
      setTimeout(() => {
        highlightText(targetElement as HTMLElement, searchTerm);
      }, 500); // Wait for scroll to complete
    }
  }, []);

  return {
    searchResults,
    handleSearch,
    handleSelect,
  };
}