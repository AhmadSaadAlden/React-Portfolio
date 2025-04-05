import React, { useContext } from 'react'
import { CardContext } from '../../Context/CardContext'
import { Link, useParams } from 'react-router-dom'
import Buttons from '../../shared/Buttons/Buttons'
import line from "../../assets/image/hero/line.png"

const DemoCard = () => {
    const context = useContext(CardContext)
    if (!context?.CardData) return <div>No Data available</div>
    const {id} = useParams()
    const project = context.CardData.find(item => item.id === id)
    if(!project) return <div>Project Not found</div>

  return (
    <div className='mt-8 md:mt-23.5 px-4 sm:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-11'>
            <div className='w-full h-auto'>
                <img 
                    src={project.img} 
                    alt={project.alt} 
                    className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
            </div>
            <div className='space-y-4 md:space-y-5'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                    <h1 className="font-poppins font-semibold text-2xl md:text-[28px] text-[var(--text-item-color)]">
                        {project.title}
                    </h1>
                    <Link to={project.iconLink} target='_blank'>
                        <img 
                            src={project.icon} 
                            alt={project.iconAlt} 
                            className="w-10 h-10 md:w-auto md:h-auto"
                        />
                    </Link>
                </div>
                
                <span className="font-poppins font-medium text-sm md:text-[14px] text-[var(--span)] block">
                    {project.date}
                </span>
                
                <p className="font-poppins font-normal text-base md:text-[18px] text-[var(--text-item-color)] pt-1 md:pt-3">
                    {project.description}
                </p>
                
                <div className='flex flex-col sm:flex-row gap-1 sm:gap-2'>
                    <h2 className="font-poppins font-medium text-base md:text-[18px] text-[var(--text-item-color)]">
                        {project.titleBasicLanguage}
                    </h2>
                    <p className="font-poppins font-normal text-base md:text-[18px] text-[var(--text-item-color)]">
                        {project.basicLanguage}
                    </p>
                </div>
            
                <div className='flex flex-col sm:flex-row gap-1 sm:gap-2'>
                    <h2 className="font-poppins font-medium text-base md:text-[18px] text-[var(--text-item-color)]">
                        {project.titleFramework}
                    </h2>
                    <p className="font-poppins font-normal text-base md:text-[18px] text-[var(--text-item-color)]">
                        {project.contentFramwork}
                    </p>
                </div>
                
                <div className='flex flex-col sm:flex-row gap-1 sm:gap-2'>
                    <h2 className="font-poppins font-medium text-base md:text-[18px] text-[var(--text-item-color)]">
                        {project.titleLibrary}
                    </h2>
                    <p className="font-poppins font-normal text-base md:text-[18px] text-[var(--text-item-color)]">
                        {project.contnetLibrary}
                    </p>
                </div>
                
                <div className='pt-2 md:pt-4'>
                    <Link to={project.repo} target="_blank">
                        <Buttons text={project.btn} />
                    </Link>
                </div>
            </div>
        </div>
        <div className='mt-10 md:mt-20 max-w-6xl mx-auto'>
            <img src={line} alt="divider line" className="w-full" />
        </div>
    </div>
  )
}

export default DemoCard