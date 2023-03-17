import React from 'react'
import Image from 'next/image';

interface MediumCardProps { 
    img: string;
    title: string;
}

function MediumCard({ img, title}:MediumCardProps) {
  return (
      <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
          <div className='h-80 w-80 relative'>
               <Image src={img} fill alt="image" className='rounded-xl'
                />
          </div>
          <h3 className='text-2xl mt-3'>{ title}</h3>
    </div>
  )
}

export default MediumCard