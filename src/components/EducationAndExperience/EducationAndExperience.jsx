import React, { useEffect, useState } from 'react';
import MainSectionTitle from '../../shared/MainSectionTitle/MainSectionTitle';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import bg1 from "../../assets/image/education/bg1.svg"
import bg2 from "../../assets/image/education/bg2.svg"
import ButtonBackToTop from '../ButtonBackToTop/ButtonBackToTop';
import { useTheme } from '../../Context/ThemeContext';

const EducationAndExperience = ({children}) => {
  const { isDarkMode } = useTheme();
  const [showButton, setShowButton] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education-section')
      if (section) {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < window.innerHeight) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  } ,[])
    
  return (
    <div className='mt-[125px] relative overflow-hidden overflow-y-hidden' id='education-section' data-theme={isDarkMode ? 'dark' : 'light'}>
        <div>
            <MainSectionTitle text={"Education and Experience"} className={"text-center text-base"}/>
            <SectionTitle text={"Education & Experience"} className={"text-center text-3xl text-[var(--text-white)]"} />
        </div>
        <img src={bg1} alt="bg1" className='absolute right-0 top-0' />
        <div className='mt-[88px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[90.37px]'>
                {children}
            </div>
        </div>
        <div className='flex justify-between flex-row-reverse'>
              {showButton && <ButtonBackToTop />}
              <img src={bg2} alt="bg2" className='w-56 md:w-auto h-auto' />
        </div>
    </div>
  );
};

export default EducationAndExperience;