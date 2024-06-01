import React from 'react'
import { IoMdAdd ,IoMdClose} from "react-icons/io";


function HelpRight() {

    const HelpRightData = [
        {
            note :'How do I open an Banko account?',
            icon:< IoMdAdd className='fill-emerald-400'/>,
            desc:''
        },
        {
            note :'How do I open an Banko account?',
            icon:< IoMdAdd className='fill-emerald-400'/>,
            desc:''
        },
        {
            note :'How do I order a new card?',
            icon:< IoMdAdd className='fill-emerald-400'/>,
            desc:''
        },
        {
            note :'How does Banko premium works?',
            icon:< IoMdClose className='fill-emerald-400'/>,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.'
        },
        {
            note :'How do I open an Banko account?',
            icon:< IoMdAdd className='fill-emerald-400'/>,
            desc:''
        },
    ]

  return (
    <>
      <div className='w-1/2 flex flex-col gap-10 p-10' >
        <div className='w-full flex flex-col'>
            {
                HelpRightData.map((items)=>{
                    return (
                        <div>
                            <div className='flex justify-between text-xl font-medium py-5 border-b-2'>{items.note} {items.icon}</div>
                            <div>{items.desc}</div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default HelpRight
