import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    // Create script elements
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FTV40HMMES';

    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FTV40HMMES');
    `;

    // Add scripts to document head
    document.head.appendChild(gtagScript);
    document.head.appendChild(configScript);

    // Cleanup function
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(configScript);
    };
  }, []);

  return null;
}