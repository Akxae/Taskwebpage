import React from 'react'

const navList = ["features","compare","support","Blog"]

function Navbar() {
  return (
    <div className='bg-white h-20 flex justify-evenly py-10 items-center w-full'>
      <div className='w-1/5'><h1 className=' text-green-500 font-bold text-3xl'>banquee.</h1></div>
      <div className='w-1/5 '><ul className='flex justify-between gap-5'>
        {
        navList.map((item)=>(<li className='font-medium text-lg'>{item}</li>)
      )}
        </ul></div>
      <div className='w-1/5 flex justify-end gap-4'>
        <button>login</button>
        <button className='bg-emerald-400 rounded-lg p-2 text-white'>Open Account</button>
      </div>
    </div>
  )
}

export default Navbar
