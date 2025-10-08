import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enhanced smooth scrolling support
if ('scrollBehavior' in document.documentElement.style) {
  // Modern browsers with native smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
} else {
  // Fallback for older browsers
  const smoothScrollPolyfill = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };
  
  document.addEventListener('DOMContentLoaded', smoothScrollPolyfill);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
