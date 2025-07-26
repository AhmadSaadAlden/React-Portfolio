import React, { useState, useContext } from 'react';
import { CardContext } from '../../Context/CardContext';
import { useTheme } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';

const Card = () => {
    const { isDarkMode } = useTheme();
    const context = useContext(CardContext);
    const [activeCard, setActiveCard] = useState(null);
    if (!context?.CardData) return <div>No Data available</div>;

    const handleScreenShot = (e, imageId) => {
        e.stopPropagation(); 
        e.preventDefault(); 
        
        const imgElement = document.getElementById(imageId);
        if (!imgElement) return;

        html2canvas(imgElement, {
            scale: 2,
            logging: true,
            useCORS: true
        }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = "screenshot.png";
            link.click();
        }).catch(err => {
            console.error("Error taking screenshot:", err);
        });
    }

    return (
        <div
            data-theme={isDarkMode ? 'dark' : 'light'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[58px]"
        >
            {context.CardData.map((item, index) => (
                <div
                    key={item.id}
                    className="w-full md:max-w-[370px] md:max-h-[320px] hover:scale-105 duration-300 cursor-pointer mb-10 group"
                    onTouchStart={() => setActiveCard(index)}
                    onTouchEnd={() => setActiveCard(null)}
                >
                    <div className='relative overflow-hidden'>
                        <img
                            src={item.img}
                            alt={item.alt}
                            className="w-full rounded-xl transition-transform duration-300"
                            id={`screenshot-target-${index}`}
                        />
                        <div className={`absolute bottom-0 left-0 right-0 h-0 
                        bg-black/70 opacity-0 group-hover:h-full group-hover:opacity-100 transition-all ease-in-out duration-500 rounded-xl
                        flex justify-center items-center gap-8 ${activeCard === index ? "h-full opacity-100" : ""}`}>
                            <button 
                                className='cursor-pointer hover:scale-110 transition-transform'
                                onClick={(e) => handleScreenShot(e, `screenshot-target-${index}`)}
                            >
                                <img src={item.screenShot} alt={item.screenShotAlt} />
                            </button>
                            <Link to={`/project/${item.id}`}>
                                <img src={item.demo} alt={item.demoAlt} />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex-1">
                            <h1 className="font-poppins font-semibold text-[22px] text-[var(--text-item-color)]">
                                {item.title}
                            </h1>
                            <p className="font-poppins font-normal text-base text-[var(--para-para-section)] py-3">
                                {item.basicLanguage}
                            </p>
                        </div>
                        <div>
                            <Link to={item.iconLink} target="_blank">
                                <img
                                    src={item.icon}
                                    alt={item.iconAlt}
                                    className="w-8 h-8 md:w-9 md:h-9"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;