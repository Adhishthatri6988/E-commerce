import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Left Section */}
      <div className='w-full sm:w-1/2 flex  justify-center items-center py-10 sm:py-0 '>
      <div className='text-[#414141] '>
        <div className='flex items-center gap-2 '>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

          <p className='font-medium tex-sm md:text-base'>Our BESTSELLERS</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero