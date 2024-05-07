'use client';
import { useState, useEffect } from 'react';

const moonSvg =    <svg
xmlns="http://www.w3.org/2000/svg"
x="0"
y="0"
enableBackground="new 0 0 122.88 122.89"
version="1.1"
width={20}

fill='#fff'
viewBox="0 0 122.88 122.89"
xmlSpace="preserve"
>
<path d="M49.06 1.27C51.23.82 53.4.5 55.54.29c2.2-.21 4.38-.31 6.53-.29a2.19 2.19 0 01.75 4.24c-9.15 3.6-16.47 10.31-20.96 18.62a40.771 40.771 0 00-4.09 27.68l.01.07c2.29 11.06 8.83 20.15 17.58 25.91 8.74 5.76 19.67 8.18 30.73 5.92l.07-.01c7.96-1.65 14.89-5.49 20.3-10.78 5.6-5.47 9.56-12.48 11.33-20.16a2.186 2.186 0 014.29.14c2.64 16.2-1.35 32.07-10.06 44.71-8.67 12.58-22.03 21.97-38.18 25.29-16.62 3.42-33.05-.22-46.18-8.86C14.52 104.1 4.69 90.45 1.27 73.83c-3.34-16.23.05-32.28 8.26-45.25C17.78 15.57 30.88 5.64 46.91 1.75c.31-.08.67-.16 1.06-.25h.01l1.08-.23z"></path>
</svg>;

const sunSvg = <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"  widths='20' stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>;

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  return (
      <div className="switch">
        <label htmlFor="toggle">
          <input id="toggle" className="toggle-switch" type="checkbox"  onClick={() => setDarkMode(!darkMode)}/>
          <div className="sun-moon"><div className="dots"></div></div>
          <div className="background"><div className="stars1"></div><div className="stars2"></div></div>
          <div className="fill"></div>
        </label>
      </div>
  );
};

export default ThemeToggle;