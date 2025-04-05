import React from 'react'
import Buttons from '../../../shared/Buttons/Buttons'

const RegistrationForm = ({item}) => {
  return (
    <div className='w-full'>
        <form action="#" className='space-y-2 h-auto md:h-[330px]'>
            <div className='w-full md:w-auto flex flex-col sm:flex-row justify-between items-center gap-[26.51px]'>
                <input type="text" placeholder={item.firstName} 
                    className='w-full md:w-[375px] h-14 rounded-lg border border-color-[var(--hr-socail-media)] 
                    fonts-inter font-normal text-base text-[var(--form-color)] px-6' 
                />
                <input type="text" placeholder={item.lastName}
                    className='w-full md:w-[375px] h-14 rounded-lg border border-color-[var(--hr-socail-media)] 
                    fonts-inter font-normal text-base text-[var(--form-color)] px-6'
                />
            </div>
            <div>
                <input type="number" placeholder={item.phoneNumber}
                    className='w-full h-14 rounded-lg border border-color-[var(--hr-socail-media)] 
                    fonts-inter font-normal text-base text-[var(--form-color)] px-6'
                />
            </div>
            <div>
                <textarea placeholder={item.notes}
                className='w-full h-[170px] rounded-lg border border-color-[var(--hr-socail-media)] 
                fonts-inter font-normal text-base text-[var(--form-color)] px-6'>
                </textarea>
            </div>
        </form>
        <Buttons text={item.btn} />

    </div>
  )
}

export default RegistrationForm
