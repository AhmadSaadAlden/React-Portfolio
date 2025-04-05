import React, { useState, useContext } from 'react';
import MainSectionTitle from '../../shared/MainSectionTitle/MainSectionTitle';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import LastWordTitle from '../LastWordTitle/LastWordTitle';
import leftSlider from "../../assets/image/projects/left_slider.png";
import rightSlider from "../../assets/image/projects/right_slider.png";
import Card from '../Card/Card';
import { CardContext } from '../../Context/CardContext';

const ProjectSlider = () => {
    const { CardData } = useContext(CardContext)
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === CardData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? CardData.length - 1 : prev - 1));
    }; 

    return (
        <div className="mt-20">
            <div className="relative w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-between min-h-[146px] px-4 py-6 md:px-6 md:py-8">
                <div className="w-full md:w-auto">
                    <MainSectionTitle text={"Portfolio"} className={"text-base"} />
                    <SectionTitle
                        text={"The Best "}
                        className={"w-full md:max-w-[362px] inline-block text-3xl text-[var(--text-white)]"}
                    >
                        <LastWordTitle text={" Project"} className={"text-3xl"} />
                    </SectionTitle>
                </div>
                <div className="mt-4 md:mt-0 md:self-end">
                    <div className="flex gap-2">
                        <button onClick={prevSlide}>
                            <img src={leftSlider} alt="leftSlider" />
                        </button>
                        <button onClick={nextSlide}>
                            <img src={rightSlider} alt="rightSlider" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden h-80 flex items-center w-full">
                <div
                    className="transition-transform duration-300 flex"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${CardData.length * 100}%`,
                    }}
                >
                    {CardData.map((card) => (
                        <div key={card.id} className="flex-shrink-0 h-full w-full">
                            <Card data={card} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProjectSlider;
