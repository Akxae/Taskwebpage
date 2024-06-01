import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

function HelpLeft() {
  return (
    <>
      <div className='w-1/2 h-full flex flex-col gap-10 p-10'>
                <h1 className='text-6xl font-semibold'>Need help?</h1>
                <div className='flex gap-3'>
                    <div className='flex items-center rounded-full w-fit p-2 bg-slate-200 h-fit'>{<FaPhoneAlt className='text-emerald-400 size-6'/>}
                    </div>
                    <div>
                        <h1 className='font-medium'>+49 176 123 456</h1>
                        <p className='text-slate-400'>Support Hotline</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center rounded-full w-fit p-2 bg-slate-200 h-fit'>{<IoMdMailUnread className='text-emerald-400 size-6'/>}</div>
                    <div>
                        <h1 className='font-medium'>help@banquee.com</h1>
                        <p className='text-slate-400'>Support Email</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 font-medium text-emerald-400'>
                    Support
                    < FaArrowRight/>
                </div>
            </div>
    </>
  )
}

export default HelpLeft
