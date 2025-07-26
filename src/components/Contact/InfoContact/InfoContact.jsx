import React from 'react'

const InfoContact = ({item}) => {
  return (
    <>
        <div className='space-y-4'>
            <div className='w-full md:max-w-[386px] h-[104px] flex flex-col md:flex-row justify-start items-center gap-5'>
                <div className='w-[62px] h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center'>
                    <img src={item.img1} alt={item.img1Alt} /> 
                </div>
                <div className='space-y-2'>
                    <h6 className='fonts-inter font-normal text-base text-[var(--form-color)]'>{item.callTitle}</h6>
                    <span className='fonts-inter font-medium text-base text-[var(--text-item-color)]'>{item.callDescripton}</span>
                </div>
            </div>

            <div className='w-full md:max-w-[386px] h-[104px] flex flex-col md:flex-row justify-start items-center gap-5'>
                <div className='w-[62px] h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center'>
                    <img src={item.img2} alt={item.img2Alt} /> 
                </div>
                <div className='space-y-2'>
                    <h6 className='fonts-inter font-normal text-base text-[var(--form-color)]'>{item.emailTitle}</h6>
                    <span className='fonts-inter font-medium text-base text-[var(--text-item-color)]'>{item.emailDescription}</span>
                </div>
            </div>

            <div className='w-full md:max-w-[386px] h-[104px] flex flex-col md:flex-row justify-start items-center gap-5'>
                <div className='w-[62px] h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center'>
                    <img src={item.img3} alt={item.img3Alt} /> 
                </div>
                <div className='space-y-2'>
                    <h6 className='fonts-inter font-normal text-base text-[var(--form-color)]'>{item.locationTitle}</h6>
                    <span className='fonts-inter font-medium text-base text-[var(--text-item-color)]'>{item.locationDescription}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoContact
