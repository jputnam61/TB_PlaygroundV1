import { useCallback } from 'react';

export function useNavigate() {
  return useCallback((path: string) => {
    // Get the navigation function from the app
    const appElement = document.querySelector('[data-app-navigation]');
    if (appElement) {
      const navigate = (appElement as any).navigate;
      if (typeof navigate === 'function') {
        navigate(path.replace('/', ''));
      }
    }
  }, []);
}