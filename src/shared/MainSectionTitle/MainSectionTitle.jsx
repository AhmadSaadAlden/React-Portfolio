import React from 'react'
import { useTheme } from '../../Context/ThemeContext';

const MainSectionTitle = ({text, className}) => {
  const { isDarkMode } = useTheme();
  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
        <h6 className={`font-medium md:text-xl font-poppins text-[var(--primary-color)] ${className}`}>
            {text}
        </h6>
    </div>
  )
}

export default MainSectionTitle