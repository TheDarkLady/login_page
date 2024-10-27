import React from 'react'

function BusinessSection() {
  return (
    <div className='w-[100%] flex flex-col justify-start items-center'>
        <div className='w-[100%] max-w-[1200px] mx-auto h-full flex flex-col justify-center items-center px-5 py-8 lg:py-24 lg:p-6 gap-10'>
            <div className='w-[70%] h-[100%]  flex flex-col justify-center items-center'>
                <h1 className='mb-4 text-grey-900 text-[30px] font-bold'>Designed for business teams like yours</h1>
                <p className='mb-5 font-light lg:text-xl text-[#6b7280] text-center'>Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
        </div>
      
    </div>
  )
}

export default BusinessSection
