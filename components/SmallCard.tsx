import React from 'react'
import Image from 'next/image';

interface SmallCardProps { 
    img: string;
    distance: string;
    location: string;
}

function SmallCard({ img, distance, location }:SmallCardProps) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
            hover:scale-105 transition transform duration-200 ease-out  hover:bg-gray-100'>
            {/* left */}
            <div className='relative h-16 w-16'>
                <Image src={img} fill alt="image" style={{ }}
                    className="relative rounded-lg" 
                />
            </div>
            {/* right */}
            <div className=''>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
    </div>
  )
}

export default SmallCard