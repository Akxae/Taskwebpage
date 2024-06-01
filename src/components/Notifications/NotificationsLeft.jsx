import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";



function NotificationsLeft() {

  const leftNotificationData = ['Malesuada ipsum' , 'Vestibulum' , 'Parturient Lorem']


  return (
    <div className='w-2/5 flex flex-col justify-between gap-6 '>
      <div><h4 className='text-xl font-semibold'>Notifications</h4></div>
      <div><h1 className='text-6xl font-semibold'>Stay notified</h1></div>
      <div><p className='font-medium text-lg'>Ammet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p></div>
      <div className='flex flex-col gap-2'>{
        leftNotificationData.map((items , index)=>{
          return (
            <div key={index} className='flex items-center text-1xl font-medium gap-4'>
            <IoIosCheckmarkCircle className='fill-emerald-400 size-7'/> {items}
            </div>
            )
        })}</div>
      <div className='text-emerald-400 flex items-center gap-3 font-medium'>Compare Cards <FaArrowRight/></div>
    </div>
  )
}

export default NotificationsLeft
