import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function GoogleTagManager() {
  useEffect(() => {
    // Create script element for GTM
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-552HDZMW');`;

    // Add script to document head
    document.head.insertBefore(script, document.head.firstChild);

    // Create noscript iframe element
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-552HDZMW';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);

    // Insert noscript element right after body tag
    document.body.insertBefore(noscript, document.body.firstChild);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
}