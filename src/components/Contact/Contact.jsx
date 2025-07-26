import React from 'react'
import MainSectionTitle from '../../shared/MainSectionTitle/MainSectionTitle'
import SectionTitle from '../../shared/SectionTitle/SectionTitle'
import LastWordTitle from '../LastWordTitle/LastWordTitle'
import { useTheme } from '../../Context/ThemeContext'
import InfoContact from './InfoContact/InfoContact'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const Contact = ({data}) => {
    const {isDarkMode} = useTheme()
  return (
    <div className='mt-24 overflow-hidden' data-theme={isDarkMode ? 'dark' : 'light'}>
        {data?.map((item,index) => (
            <div key={index}>
                <div className='w-full'>
                    <MainSectionTitle text={item.mainSectionTitle} />
                    <SectionTitle text={item.sectionTitle} className={"text-[var(--text-white)]"}>
                        <LastWordTitle text={item.lastWordTitle} />
                    </SectionTitle>
                </div>
                <div className='mt-14 w-full grid grid-cols-1 md:grid-cols-2 md:gap-[59.64px] gap-12'>
                    <div className='w-full'>
                        <InfoContact item={item}/>
                    </div>
                    <div className='w-full '>
                        <RegistrationForm item={item} />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Contact
