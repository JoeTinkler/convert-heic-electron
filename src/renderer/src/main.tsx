import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './providers/theme';
import App from './App';
import { GlobalStyles } from './components/ui/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
