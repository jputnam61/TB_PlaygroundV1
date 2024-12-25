import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/providers/theme-provider';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <GoogleTagManager />
      <GoogleAnalytics />
      <App />
    </ThemeProvider>
  </StrictMode>
);