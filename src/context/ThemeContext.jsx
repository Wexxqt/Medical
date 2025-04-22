import { createContext, useState, useEffect } from 'react';

// Create context
export const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has previously selected a theme
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (typeof storedTheme === 'string') {
        return storedTheme === 'dark';
      }
      
      // If no theme is stored, check user's system preference
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return true;
      }
    }
    
    // Default to dark theme
    return true;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update body class and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Update DOM
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Initialize theme on component mount
  useEffect(() => {
    // Force immediate application of theme
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, []);

  // Context value
  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 