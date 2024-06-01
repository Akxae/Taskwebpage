import React from 'react'
import { RiHomeLine } from "react-icons/ri";
import { RiCoinsLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";

const footerData = [ 
    {icon : <RiHomeLine className='size-7 fill-emerald-400'/> ,
      name : 'Home'},
    {icon : <RiCoinsLine className='size-7'/> ,
      name : 'Savings'},
    {icon : <IoMdCard className='size-7'/> ,
      name : 'Card'},
    {icon : <FiUser className='size-7'/> ,
      name : 'Account'},
    ]



function PhoneFooter() {
  return (
    <div className='flex py-4 px-2 justify-between items-center'>
      {
        footerData.map((item , index)=>(
            <div className='flex flex-col justify-center items-center'>{item.icon}{item.name}</div>
        ))
      }
    </div>
  )
}

export default PhoneFooter
