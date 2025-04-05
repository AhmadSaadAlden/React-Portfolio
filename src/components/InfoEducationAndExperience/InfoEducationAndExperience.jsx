import React from 'react';
import frame from "../../assets/image/education/frame.png";
import { useTheme } from '../../Context/ThemeContext';

const InfoEducationAndExperience = ({ data }) => {
    const { isDarkMode } = useTheme();
  const chunkedData = [];
   for (let i = 0; i < data.length; i += 2) {
    chunkedData.push(data.slice(i, i + 2));
  } 

  return (
    <>
        {chunkedData.map((chunk, index) => (
            <div key={index} className="max-w-[567.81px]  flex flex-col md:flex-rows" data-theme={isDarkMode ? 'dark' : 'light'}>
                    <div className='flex justify-between gap-12'>
                        <img src={frame} alt="frame" />
                        <div className="max-w-[498.24px] flex flex-col gap-16">
                            {chunk.map((item, subIndex) => (
                                <div key={subIndex}>
                                    <h3 className="font-poppins font-medium lg:text-2xl text-[var(--title-para-section)]">
                                    {item.title}
                                    </h3>
                                    <p className="font-poppins text-base font-normal text-[var(--para-para-section)] pt-3.5">
                                    {item.para}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        ))}
    </>
  )
}

export default InfoEducationAndExperience;

