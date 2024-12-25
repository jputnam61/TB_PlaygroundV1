export function highlightText(element: HTMLElement, searchTerm: string) {
  const text = element.textContent || '';
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const newHtml = text.replace(regex, '<mark class="highlight-search">$1</mark>');
  element.innerHTML = newHtml;

  // Add highlight animation class
  const highlights = element.getElementsByClassName('highlight-search');
  Array.from(highlights).forEach(highlight => {
    highlight.classList.add('animate-highlight');
    
    // Remove highlight after animation
    setTimeout(() => {
      const parent = highlight.parentNode;
      if (parent) {
        parent.textContent = text;
      }
    }, 3000);
  });
}