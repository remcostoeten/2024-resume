import { useState, useEffect } from 'react';

type TTheme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<TTheme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as TTheme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', savedTheme === 'dark' || !savedTheme);
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  function cycleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return { theme, cycleTheme };
}
