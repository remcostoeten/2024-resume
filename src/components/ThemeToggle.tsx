"use client";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <div className="relative print:hidden">
        <div className="fixed  right-0 top-2 z-50">
          <div className="switch">
            <label htmlFor="toggle">
              <input
                id="toggle"
                className="toggle-switch"
                type="checkbox"
                onClick={() => setDarkMode(!darkMode)}
              />
              <div className="sun-moon">
                <div className="dots"></div>
              </div>
              <div className="background">
                <div className="stars1"></div>
                <div className="stars2"></div>
              </div>
              <div className="fill"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
