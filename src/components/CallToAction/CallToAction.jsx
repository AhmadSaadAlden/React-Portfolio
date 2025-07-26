import React from 'react'
import { useTheme } from '../../Context/ThemeContext'
import lines from "../../assets/image/callToAction/LInes.svg"
import Buttons from '../../shared/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const CallToAction = ({data}) => {
    const { isDarkMode } = useTheme();

  return (
    <div className='mt-3 relative' data-theme={isDarkMode ? 'dark' : 'light'} style={{minHeight: '375px'}}>
        <div className='w-full max-w-[71.6875rem] h-[347px] bg-[var(--primary-color)] rounded-4xl absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 -rotate-1 z-0'>
        </div>

        <div className='w-full max-w-[73.0625rem] h-[348px] bg-[var(--background-section)] rounded-4xl absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 rotate-1 z-10'>
            <img src={lines} alt="lines" className="absolute w-full h-full" />
            
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-1 w-full px-4 md:px-[136px] z-20'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col md:flex-row justify-between items-center gap-6'>
                        <div className='w-full md:w-[589px] space-y-4 text-center md:text-left'>
                            <h3 className='font-poppins font-semibold text-4xl lg:text-5xl text-[var(--text-btn)]'>{item.title}</h3>
                            <p className='font-poppins font-normal text-base md:text-xl text-[var(--text-btn)]'>
                                {item.description}
                                <span className='font-poppins font-bold text-base md:text-xl text-[var(--text-btn)]'>{item.span}</span>
                            </p>
                        </div>
                        <div className='w-full md:w-auto flex justify-center'>
                        <Link to={"/contact"}>
                            <Buttons text={item.btn} 
                                    bgColor={"bg-[var(--primary-color)]"} 
                                    textColor={"text-[var(--text-btn)]"} 
                                    className={"flex justify-center items-center gap-3"}>
                                    <FaArrowRight className='text-[var(--text-btn)] w-4 h-4' />
                            </Buttons>
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CallToAction