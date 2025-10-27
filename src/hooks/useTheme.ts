import { useState, useEffect } from 'react';

type TTheme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<TTheme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as TTheme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  function applyTheme(selectedTheme: TTheme) {
    const htmlElement = document.documentElement;
    if (selectedTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  function cycleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return { theme, mounted, cycleTheme };
}
