import React from 'react'

const LastWordTitle = ({text, textColor, className,}) => {
  return (
    <span className={`${textColor} ${className} font-semibold text-[var(--primary-color)] font-poppins md:text-[40px]`}>
        {text}
    </span>
  )
}

export default LastWordTitle