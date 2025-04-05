import React from 'react'

const Buttons = ({text, bgColor, textColor, mt, handler = () => {}, children, className,}) => {
  return (
    <div>
        <button 
            onClick={handler}
            className={`${bgColor} ${textColor} ${mt} ${className} w-[155px] h-[50px] cursor-pointer hover:scale-105 duration-300 rounded-[8px] 
            fonts-inter text-[14px] font-medium bg-[var(--primary-color)] text-[var(--text-btn)]`}>
                {text}
                {children}
        </button>
    </div>
  )
}

export default Buttons