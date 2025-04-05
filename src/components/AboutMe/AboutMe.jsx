import React, { useContext, useEffect, useState } from 'react';
import logoLight from "../../assets/image/about/logoLight.png";
import logoDark from "../../assets/image/about/logoDark.png";
import { useTheme } from '../../Context/ThemeContext';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import { SkillsProgressContext } from '../../Context/SkillsProgressContext';

const AboutMe = ({ data }) => {
    const { isDarkMode } = useTheme();
    const [viewImage, setViewImage] = useState(isDarkMode === 'light' ? logoLight : logoDark);
    const { skills } = useContext(SkillsProgressContext);

    useEffect(() => {
        if (isDarkMode === 'light') {
            setViewImage(logoLight);
        } else {
            setViewImage(logoDark);
        }
    }, [isDarkMode]);

    return (
        <div className='mt-24' data-theme={isDarkMode ? 'dark' : 'light'}>
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                <div className='w-full md:w-auto px-4 md:px-[117px] order-2 md:order-1 mt-8 md:mt-0'>
                    <img src={viewImage} alt="logoImage" className='mx-auto md:mx-0' />
                </div>

                <div className='w-full md:w-[598px] order-1 px-4 md:px-0'>
                    {data.map((item, index) => (
                        <div key={index}>
                            <SectionTitle text={item.title} className='text-[var(--text-white)] text-center md:text-left' />
                            <p className='font-poppins font-normal text-base md:text-[18px] text-[var(--para-para-section)] text-center md:text-left'>
                                {item.para}
                            </p>
                            <div className='mt-10'>
                                {skills.map((skill, idx) => (
                                    <ProgressBar key={idx} skill={skill.skill} percentage={skill.percentage} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;