import React from 'react'
import { FaApple } from "react-icons/fa";
import { TbCurrencyEuro } from "react-icons/tb";


function TransactionRight() {
    const TransactionList = [
        {
        icon:<FaApple className='size-8 fill-white' />,
        title:'Apple',
        desc : 'Electronics',
        price : -`999`
    },
        {
        icon:<FaApple className='size-8 fill-white'/>,
        title:'Amazon',
        desc : 'Shopping',
        price : -`49`
    },
        {
        icon:<FaApple className='size-8 fill-white'/>,
        title:'Twitter',
        desc : 'Ads',
        price : -`29`
    },
        {
        icon:<FaApple className='size-8 fill-white'/>,
        title:'Microsoft',
        desc : 'APffice Suites',
        price : -`149`
    },
        {
        icon:<FaApple className='size-8 fill-white'/>,
        title:'DropBox',
        desc : 'Cloud',
        price : -`14`
    },
        {
        icon:<FaApple className='size-8 fill-white'/>,
        title:'Paypal',
        desc : 'Shopping',
        price : -`200`
    },
    ]
  return (
    <div className='h-full w-1/2 p-16 flex flex-col gap-6 items-start '>
    {
        TransactionList.map((item , index)=>{
            return(

                <div className='w-full  mt-2 rounded-md bg-white flex items-center p-4 justify-around'>
                    <div className='w- h-fit rounded-lg p-2 flex justify-center items-center bg-emerald-400'>{item.icon}</div>    
                    <div className='flex-1 pl-4'>
                        <h3 className='font-medium'>{item.title}</h3>
                        <h4>{item.desc}</h4>
                    </div>
                    <h1 className='font-medium text-2xl flex items-center'>
                   {item.price} <TbCurrencyEuro/>
                    </h1>
                    
                </div>
            )
        })
    }
    </div>   
  )
}
export default TransactionRight
