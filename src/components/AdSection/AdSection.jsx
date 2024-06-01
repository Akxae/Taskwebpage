import React from 'react'
import googleplay from '../../Assetss/googleplay.png'
import applestore from '../../Assetss/applestore.png'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Phone from '../Features/Phone';

function AdSection() {

    const BannerData = ['Instant transactions','Payments worldwide','Saving accounts','100% mobile banking',]

  return (
    <div className='flex w-full justify-center  h-80vh py-16'>
      <div className='bg-emerald-400 w-9/12 rounded-2xl overflow-hidden flex'>
        <div className=' w-7/12 flex flex-col p-20 gap-8'>
            <h1 className='text-6xl font-medium text-white'>One app. <br /> One banking.</h1>
            <p className='text-xl text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, eos explicabo fugiat recusandae dolorem minus.</p>
            <div className='flex flex-wrap gap-4 '>
                {
                    BannerData.map((item)=>{
                        return (
                            <div className='flex items-center text-xl text-white'><IoIosCheckmarkCircle className='fill-gray-50' />{item}</div>
                        )
                    })
                }
            </div>
            <div className='flex w-40 h-fit items-center'>
                <img src={googleplay} alt="" className=' object-contain'/>
                <img src={applestore} alt="" className=' object-contain'/>
            </div>
        </div>
        <div className='w-7/12'>
           <Phone/>
        </div>
      </div>
    </div>
  )
}

export default AdSection
