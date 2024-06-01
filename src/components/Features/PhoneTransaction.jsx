import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

import { FaTwitter } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";





const TransactionList = [
    {
    icon:<FaApple className='size-6 fill-white' />,
    title:'Apple',
    desc : 'Electronics',
    price : -`799`
},
    {
    icon:<FaGoogle className='size-6 fill-white'/>,
    title:'Google Play Store',
    desc : 'Apps',
    price : -`49`
},
    {
    icon:<FaAmazon className='size-6 fill-white'/>,
    title:'Amazon',
    desc : 'Shopping',
    price : -`59`
},
    {
    icon:<FaTwitter className='size-6 fill-white'/>,
    title:'Twitter',
    desc : 'Ads',
    price : -`9`
},
]

function PhoneTransaction() {
  return (
    <>
    <div className='py-4 pb-0'>
    <div className='flex justify-between px-2'>
        <h4 className='font-bold'>Transactions</h4>
        <div className='flex justify-center items-center gap-2 text-emerald-400'>view all <FaArrowRight/></div>
    </div>
    
    {
        TransactionList.map((item , index)=>{
            return(
                <div className='w-full h-20 mt-2 rounded-md bg-gray-100 flex items-center px-2 justify-around'>
                    <div className='w-fit h-fit rounded-lg p-2 flex justify-center items-center bg-emerald-400'>{item.icon}</div>    
                    <div className='flex-1 pl-4'>
                        <h3 className='font-medium'>{item.title}</h3>
                        <h4>{item.desc}</h4>
                    </div>
                    <h1 className='flex font-medium items-center'>
                    {item.price}<BsCurrencyDollar/>
                    </h1>
                    
                </div>
            )
        })
    }
    </div>
    
    </>
    
    
  )
}

export default PhoneTransaction
