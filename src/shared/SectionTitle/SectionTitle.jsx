import React from 'react'

const SectionTitle = ({text, className,children}) => {
  return (
    <div>
        <h1 className={`font-semibold md:text-[40px] font-poppins  ${className}`}>
            {text}
            {children}
        </h1>
    </div>
  )
}

export default SectionTitle