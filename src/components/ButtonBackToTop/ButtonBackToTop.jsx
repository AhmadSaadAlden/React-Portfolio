import React from 'react'
import { MdArrowUpward } from 'react-icons/md'
import { useTheme } from '../../Context/ThemeContext';

const ButtonBackToTop = () => {
    const { isDarkMode } = useTheme();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='flex justify-end mt-14'
        onClick={scrollToTop}
        data-theme={isDarkMode ? 'dark' : 'light'} 
    >
        <button className='w-[50px] h-[50px] bg-[var(--primary-color)] rounded-xl text-[var(--text-btn)] flex justify-center items-center
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
            <MdArrowUpward />
        </button>
    </div>
  )
}

export default ButtonBackToTop