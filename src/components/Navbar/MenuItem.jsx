import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { NavbarContext } from '../../Context/NavbarContext'
import { useTheme } from '../../Context/ThemeContext'
import DarkAndLightMode from '../DarkAndLightMode/DarkAndLightMode'

const MenuItem = () => {
    const { DataNavbar } = useContext(NavbarContext)
    const { isDarkMode } = useTheme()
    const menuHeight = (DataNavbar.length + 1) * 50;
    return (
            <div 
                className='fixed inset-18 bg-[var(--second-bg-color)] text-[var(--second-text-color)] rounded-lg shadow-lg p-6'
                style={{
                    height: `${menuHeight}px`,
                }}
                data-theme={isDarkMode ? 'dark' : 'light'}
            >
                <div className='flex flex-col space-y-4'>
                    {DataNavbar.map((item, index) => (
                        <NavLink 
                            key={index} 
                            to={item.to} 
                            className='hover:text-blue-500 transition duration-300 font-poppins font-medium text-xl
                            hover:bg-slate-500 w-full flex items-center justify-center'
                        >
                            {item.content}
                        </NavLink>
                    ))}
                    {/* Add DarkLightMode to MenuItem */}
                    <div className='flex justify-center items-center bg-slate-700 text-[var(--text-white)]'>
                        <DarkAndLightMode />
                    </div>
                </div>
            </div>            
    )
}

export default MenuItem 
