import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FaBars } from 'react-icons/fa'
import { useTheme } from '../../Context/ThemeContext'
import MenuItem from '../Navbar/MenuItem'
import DarkAndLightMode from '../DarkAndLightMode/DarkAndLightMode'

const Header = () => {
  const {isDarkMode} = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-between transition-opacity duration-500 py-[var(--py-global)] px-[var(--px-global)] w-full h-9' 
        data-theme={isDarkMode ? 'dark' : 'light'}
    >
      {/* logo */}
        <div>
            <h1 className='text-2xl text-[var(--text-logo)] font-semibold font-poppins cursor-pointer'> Ahmad </h1>
        </div>
        {/* Navbar */}
        <div className='hidden md:block'>
            <Navbar />
        </div>
        {/* Bars Icon & DarkLightMode */}
        <div className='flex items-center space-x-2'>
          <div className='hidden md:block'>
            <DarkAndLightMode />
          </div>
          <div className=' md:hidden sm:block text-xl text-[var(--text-white)] cursor-pointer'
          onClick={toggleMenu}
          >
            <FaBars />
          </div>
        </div>
        {/* view MenuItem in sm screen*/}
        {isMenuOpen && <MenuItem DarkAndLightMode={<DarkAndLightMode />} />}
    </div>
  )
}

export default Header