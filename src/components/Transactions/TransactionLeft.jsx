import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";


const leftTransactionData = ['Malesuada ipsum' , 'Vestibulum' , 'Parturient Lorem']

function TransactionLeft() {
  return (
    <div className=' h-full w-1/2 p-20 flex flex-col gap-10 items-start '>
      <h1 className='font-medium text-6xl'>Send & receive <br /> money instant</h1>
      <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, adipisci! Dolores, ipsum optio eaque voluptatibus recusandae odio repellat culpa, quis temporibus libero laudantium voluptas fuga. Assumenda eligendi quo commodi ea.</p>
      <div>
        <div className='flex flex-col justify-center gap-4'>
      {
        leftTransactionData.map((items , index)=>{
           return (
            <div key={index} className='flex items-center text-2xl font-medium gap-4'>
            <IoIosCheckmarkCircle className='fill-emerald-400 size-8'/> {items}
            </div>
            )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default TransactionLeft
