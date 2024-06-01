import React from 'react'
import apay from '../../Assetss/apay.png'
import applepay from '../../Assetss/applepay.jpg'
import bitcoin from '../../Assetss/bitcoin-225080_1280.png'
import gpay from '../../Assetss/gpay.png'
import mastercard from '../../Assetss/mastercard.jpg'
import paypal from '../../Assetss/PayPal PNG.jpg'
import shopify from '../../Assetss/Shopify_logo.svg.png'
import visa from '../../Assetss/visa.jpg'
import webFlow from '../../Assetss/Webflow.png'
import zapier from '../../Assetss/zapier.png'
import { IoIosCheckmarkCircle } from "react-icons/io";


function Tools() {

    const shoppingTools = [webFlow , shopify , zapier , bitcoin , paypal , mastercard , visa ,gpay ,applepay,apay ]

    const shoppingData = ['Secure and encrypted integration' , 'Fully API interface' , 'Payments worldwide']

  return (
    <div className=' w-full h-80vh flex flex-col justify-center items-center gap-6 border-b-2' >
        <div className='flex w-8/12'>
        <div className='grid grid-cols-5 gap-2 w-6/12 h-auto place-items-start'>
        {
            shoppingTools.map((items)=>{
                return (
                    <div className='bg-gray-200 p-2 rounded-lg'>
                        <img src={items} alt="" className='w-20 h-auto object-contain aspect-3/2ap '/>
                    </div>
                )
            })
        }
      </div>
        </div>
      
        <div className='flex w-8/12'>
            <div className='w-8/12 flex flex-col gap-5'>
                <h4 className='text-xl font-semibold'>Tools</h4>
                <h1 className='text-6xl font-semibold'> Seemless <br />integration</h1>
                <p className='text-xl font-semibold flex justify-between gap-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className='flex flex-col gap-2 justify-end'>{
        shoppingData.map((items , index)=>{
          return (
            <div key={index} className='flex items-center text-1xl font-medium gap-4'>
            <IoIosCheckmarkCircle className='fill-emerald-400 size-10'/> {items}
            </div>
            )
        })}</div>
        </div>
    </div>
  )
}

export default Tools
