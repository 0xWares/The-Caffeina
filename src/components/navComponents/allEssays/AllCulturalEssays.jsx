import React from 'react'
import Navigation from '../../Navigation';
const AllCulturalEssays = () => {
  return (
    <div>
         <Navigation/>
         <div className='bg-[#0F0F0F]'>
            <div className="flex flex-col justify-center items-center mt-10 sm:mt-14 md:mt-16 px-4 text-center">
                <h5 className="text-xl sm:text-2xl md:text-3xl text-[#9FA09C] mt-3 sm:mt-4">Cultural essay</h5>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E6DBD0] leading-tight">
        Coffee and the Intellectual Identity
      </h1>
      <h4 className="mb-5 text-base sm:text-base md:text-base text-[#9FA09C] mt-3 sm:mt-4">
        A quiet archive of coffee, culture and thought.
      </h4>
      <div className='w-full flex items-start mb-10 flex-col py-2 border-y border-[#BDB1B0]'>
        <p className='text-[#BDB1B0] ml-8'>By Hasan M.</p>
        <p className='text-[#BDB1B0] ml-8'>published: 2026</p>

      </div>

      <div className='w-full bg-[#0F0F0F] '>
        <div className='w-[90%]'>
            <div>
            <h1 className='text-[#D4C2B5] text-3xl text-start w-7/12'><span className='text-5xl'>"</span> Coffee is no longer just a beverage. It has quietly positioned itself as a symbol of thought, solitude, and modern identity.</h1>
            </div>
            <div className='bg=white w-5/12' >

            </div>
        </div>
      </div>
      
    </div>

         </div>
      
    </div>
  )
}

export default AllCulturalEssays
