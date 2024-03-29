import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
      <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
        <Image src="https://links.papareact.com/0fm" fill alt="image here" style={{ objectFit: 'cover' }}
         className="cursor-pointer my-auto" 
          />
          <div className='absolute top-1/2 w-full text-center'>
              <p className='text-sm sm:text-lg'> 
                  Not sure where to go? Perfect
              </p>
              <button className='my-3 font-bold text-purple-500 border-2 shadow-md px-10 py-4 rounded-full bg-white
             hover:shadow-xl active:scale-90 transition duration-150'>
                  I'm flexible
              </button>
          </div>
    </div>
  )
}

export default Banner