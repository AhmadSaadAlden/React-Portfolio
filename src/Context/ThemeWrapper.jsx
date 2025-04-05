import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useTheme(); 

  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
      {children}
    </div>
  );
};

export default ThemeWrapper;