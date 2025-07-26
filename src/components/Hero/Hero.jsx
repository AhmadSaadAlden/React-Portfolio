import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import { FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Buttons from '../../shared/Buttons/Buttons';


const Hero = ({ data }) => {
    const { isDarkMode } = useTheme();

    return (
        <>
            <div className={`text-[var(--text-white)] w-full mt-12 flex justify-center`} data-theme={isDarkMode ? 'dark' : 'light'}>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] gap-8'>
                        <div className='w-full md:w-[48%] lg:w-[50%] text-center md:text-left'>
                            <h6 className='text-xl fonts-inter font-medium text-[var(--primary-color)]'>{item.title}</h6>
                            <h1 className='w-full font-poppins font-bold text-4xl lg:text-[55px] pt-[7px]'>
                                <span className='font-poppins font-normal text-[var(--text-item-color)]'>
                                    {item.spanTitle}
                                </span> {item.subtitle}
                            </h1>
                            <p className='w-full fonts-inter font-normal text-base text-[var(--text-item-color)] pt-10'>{item.description}</p>
                            {/*'https://drive.google.com/uc?export=download&id=1fE5DWvIQlRJm88279hd82-oWWmVQ0wAE'*/}
                            <Link to={'https://drive.google.com/uc?export=download&id=1fE5DWvIQlRJm88279hd82-oWWmVQ0wAE'}>
                                <Buttons
                                    text={"Download CV"} bgColor={"bg-[var(--primary-color)]"} textColor={"text-[var(--text-btn)]"} mt={"mt-[30px]"}
                                />
                            </Link>
                        </div>

                        <div className='w-full md:w-[48%] lg:w-[50%] flex justify-end'>
                            <div className='flex flex-col md:flex-row items-center'>
                                <img src={item.img} alt={item.alt} className='w-full md:w-[592px] h-auto md:h-[464px]' />
                                <div className='mt-1 flex flex-row md:flex-col items-center md:items-start'>
                                    <h6 className='font-inter font-normal text-base text-[var(--text-item-color)] pr-4'
                                        style={{ writingMode: 'vertical-lr' }}
                                    >
                                        {item.FollowMe}
                                    </h6>
                                    <hr className='bg-[var(--primary-color)] ml-2 mt-8' style={{ writingMode: 'vertical-lr', width: '1.5px', height: '60px' }} />
                                    <div className='flex flex-row md:flex-col mt-6'>
                                        <Link className='mb-4'>
                                            <FaFacebook className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full lg:mt-8" />
                                        </Link>
                                        <Link to={"https://www.linkedin.com/in/ahmad-saad-alden-7a33311b9"} className='mb-4'>
                                            <FaLinkedinIn className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full lg:mt-8" />
                                        </Link>
                                        <Link to={"https://www.instagram.com/ahmad.sad.alden?utm_source=qr&igsh=MXQ0MjJyYm9kZTBtcA=="}>
                                            <FaInstagram className="w-[25px] h-[25px] p-1 text-white bg-[var(--social-media)] rounded-full lg:mt-8" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Hero;