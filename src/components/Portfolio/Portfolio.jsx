import React from 'react'
import MainSectionTitle from '../../shared/MainSectionTitle/MainSectionTitle'
import SectionTitle from '../../shared/SectionTitle/SectionTitle'
import LastWordTitle from '../LastWordTitle/LastWordTitle'
import Buttons from '../../shared/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import { useTheme } from '../../Context/ThemeContext'
import Card from '../Card/Card'

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const accountGitHub = "https://github.com/AhmadSaadAlden"
  return (
    <div className='mt-24' data-theme={isDarkMode ? 'dark' : 'light'}>
      {/* portfolio info */}
      <div className='relative w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-between min-h-[146px] px-4 py-6 md:px-6 md:py-8'>
        <div className='w-full md:w-auto'>
          <MainSectionTitle text={"Portfolio"} className={"text-base"} />
          <SectionTitle  text={"My Creative Works Latest"} className={"w-full md:max-w-[362px] inline-block text-3xl text-[var(--text-white)]"}>
            <LastWordTitle text={" Project"} className={"text-3xl"} />
          </SectionTitle>
        </div>
        <div className='mt-4 md:mt-0 md:self-end'>
          <Link to={accountGitHub} target='_blank'>
            <Buttons text={"View Github"} className={"flex justify-center items-center gap-3"}>
              <FaArrowUp className='w-[18px] h-[18px] rotate-45' />
            </Buttons>
          </Link>
        </div>
      </div>

      {/* card portfolio */}
      <div className='mt-14'>
        <Card />
      </div>
    </div>
  )
}

export default Portfolio