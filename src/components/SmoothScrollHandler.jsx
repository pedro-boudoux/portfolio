'use client';

import { useEffect } from 'react';

export default function SmoothScrollHandler() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a');
      const href = target?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const y = element.offsetTop - 124;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}