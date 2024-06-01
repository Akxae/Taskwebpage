import React from 'react'
import PhoneCard from './PhoneCard'
import PhoneTransaction from './PhoneTransaction'
import { RiUserShared2Line } from "react-icons/ri";
import { RiUserReceivedLine } from "react-icons/ri";
import PhoneFooter from './PhoneFooter';

function Phone() {
  return (
    <>
        <div className='w-4/6 bg-gray-50  mt-16 ml-20 border-8 rounded-5rem border-black p-6 '>
        <div className='w-full flex justify-between items-end'>
            <p className='font-semibold text-lg'>Current balance</p>
            <p className='font-semibold text-3xl'>&#36;4.658,50</p>
        </div>
        <PhoneCard/>
        <div className='flex  py-6 justify-around gap-2'>
            <div className='flex justify-center items-center'>
                <div className=' bg-gray-200 text-3xl mr-4 rounded-full p-1 w-fit relative'><RiUserShared2Line className='fill-emerald-400 size-6'/></div>
                <h4>Send Money</h4>
            </div>
            <div  className='flex justify-center items-center'>
                <div className='bg-gray-200 text-3xl mr-4 rounded-full p-1 w-fit relative'><RiUserReceivedLine className='fill-emerald-400 size-6'/></div>
                <h4>Receive Money</h4>
            </div>
        </div>
        <PhoneTransaction/>
        <PhoneFooter/>
      </div>  
    </>
  )}
export default Phone;
