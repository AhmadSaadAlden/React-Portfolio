import React from 'react'
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'
import { useTheme } from '../../Context/ThemeContext'

const DarkAndLightMode = () => {
    const {isDarkMode, toggleTheme } = useTheme()

  return (
    <div className='flex items-center justify-center w-[29.12px] h-[30px] cursor-pointer relative'
    onClick={toggleTheme}
    >
        <FaMoon  className={`absolute w-6 h-6 transition-opacity duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}/>
        <BiSun className={`absolute w-6 h-6 text-[var(--text-white)] transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}/>
    </div>
  )
}

export default DarkAndLightMode