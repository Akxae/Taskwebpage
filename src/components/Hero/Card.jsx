import React from 'react';
import { FaWifi } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

function Card({ colorConfig }) {
  return (
    <div className={`w-96 h-60 ${colorConfig.bgColor} ${colorConfig.top} rotate-90 mt-4 rounded-xl relative flex flex-col py-4`}>
    <div className='flex w-full justify-between px-5 mb-14'>
        <h3 className='text-white text-3xl font-bold'>banquee</h3>
        <FaWifi className='rotate-90 fill-white' />
    </div>
    <h1 className='font-abc text-white w-full text-center text-xl mt-6'>1234 5678 9000 0000</h1>
    <div className='flex justify-around mt-2'>
        <div><h4 className='text-1px text-white'>Card Holder</h4><h4 className='text-white text-xs'>John Doe</h4></div>
        <div><h4 className='text-1px text-white'>Expiry Date</h4><h4 className='text-white text-xs'>09/28</h4></div>
        <SiVisa className='size-10 fill-white' />
    </div>
</div>
  );
}

export default Card;
