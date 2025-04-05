import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { useTheme } from '../../Context/ThemeContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {isDarkMode} = useTheme()
  return (
      <div className='w-full' data-theme={isDarkMode ? 'dark' : 'light'}>
        <hr className="w-full border-t border-[var(--hr-socail-media)] my-4" />
        <div className='w-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
          <div>
              <h1 className='fonts-inter font-normal text-base text-[var(--text-item-color)]'>@2024. All Rights Reserved</h1>
          </div>
          <div>
              <p className='fonts-inter font-normal text-base text-[var(--text-item-color)]'>Develpoment by Ahmad Saad Alden</p>
          </div>
          <div className="flex space-x-4 pr-4">
              <Link><FaFacebook className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full" /></Link>
              <Link><FaTwitter className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full" /></Link>
              <Link to={"https://www.linkedin.com/in/ahmad-saad-alden-7a33311b9"}>
                <FaLinkedinIn className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full" />
              </Link>
              <Link to={"https://www.instagram.com/ahmad.sad.alden?utm_source=qr&igsh=MXQ0MjJyYm9kZTBtcA=="}>
                <FaInstagram className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full" />
              </Link>
          </div> 
    </div>
      </div>

    
  )
}

export default Footer