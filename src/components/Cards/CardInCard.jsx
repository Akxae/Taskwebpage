import React from 'react'
import { FaWifi } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";


function CardInCard({color , position}) {
  return (
    <>
      <div className={`w-full h-80 ${color} mt-4 rounded-xl flex flex-col gap-3 py-4 relative ${position}`}>
        <div className='flex w-full justify-between px-5 mb-14'>
            <h3 className='text-white font-bold text-4xl'>banquee.</h3>
            <FaWifi className='rotate-90 fill-white size-8' />
        </div>
        <h1 className='font-abc text-white w-full text-center text-4xl mt-6'>1234 5678 9000 0000</h1>
        <div className='flex justify-between px-9 mt-2'>
            <div><h4 className='text-xl text-white'>Card Holder</h4><h4 className='text-white text-xs'>John Doe</h4></div>
            <div><h4 className='text-xl text-white flex '>Expiry Date</h4><h4 className='text-white text-xs'>09/28</h4></div>
            <SiMastercard className='size-10 fill-white' />
        </div>
    </div>
    </>
  )
}

export default CardInCard
