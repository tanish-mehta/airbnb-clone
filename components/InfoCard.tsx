import React from 'react'
import Image from 'next/image'
function InfoCard({ img, location, title, description, star, price, total }: any) {
  return (
      <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 
      hover:shadow-lg transition duration-200 ease-out first:border-t 
      '>
          <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0' >
              <Image alt="" src={img} fill style={{objectFit: "cover"}} className="rounded-2xl">
              </Image>
          </div>
          <div className='flex flex-col flex-grow pl-5'>
              <div className='flex justify-between'>
                <p>{location}</p>
                {/* heart */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
              </div>

              <h4 className='text-xl'>{ title}</h4>
              
              <div className='border-b w-10 pt-2'></div>

              <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

              <div className='flex justify-between items-end pt-5'>
                  <p className='flex items-center'> {/* star */}  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 text-red-500">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                      </svg>
                      {star}
                  </p>
 
                  <div>
                      <p className='text-lg lg:text-2xl pb-2 font-semibold '>{ price}</p>
                      <p className='text-right font-extralight'>{ total}</p>
                  </div>
              </div>
             


          </div>
    </div>
  )
}

export default InfoCard