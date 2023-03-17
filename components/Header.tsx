import React from 'react'
import Image from "next/image";
import { SearchIcon } from '@heroicons/react/solid'

function Header() {
    return (

      <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* left */}
        <div className='relative flex items-center h-10'>
          <Image src="https://links.papareact.com/qd3" fill alt="image here" style={{ objectFit: 'contain', objectPosition: 'left' }}
         className="cursor-pointer my-auto" 
        />
        </div>
        {/* middle */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
          <input type="text" placeholder='Start your search' className='text-sm text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none flex-grow'/>
          

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:mx-2 md:inline-flex hidden cursor-pointer h-8 bg-red-400 text-white rounded-full p-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> 
</svg>

        </div>
        {/* right */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
          <p className='hidden md:inline cursor-pointer'>Become a host</p>
          {/* globe icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            {/* menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
            {/* user circle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

          </div>
        </div>
      </header>
  )
}

export default Header

