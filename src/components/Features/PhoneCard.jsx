import React from 'react'
import { FaWifi } from "react-icons/fa";
import { SiVisa } from "react-icons/si";



function PhoneCard() {
  return (
    <div className='w-full h-60 bg-gray-700 mt-4 rounded-xl flex flex-col p-2'>
        <div className='flex w-full justify-between px-5 mb-14'>
            <h3 className='text-white font-bold text-3xl'>banquee.</h3>
            <FaWifi className='rotate-90 fill-white' />
        </div>
        <h1 className='font-abc text-white w-full text-center text-2xl mt-6'>1234 5678 9000 0000</h1>
        <div className='flex justify-between px-9 mt-2'>
            <div><h4 className='text-1px text-white'>Card Holder</h4><h4 className='text-white text-xs'>John Doe</h4></div>
            <div><h4 className='text-1px text-white flex '>Expiry Date</h4><h4 className='text-white text-xs'>09/28</h4></div>
            <SiVisa className='size-10 fill-white' />
        </div>
    </div>
  )
}

export default PhoneCard
