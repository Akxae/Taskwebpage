import React from 'react'

function BlogProfile({image , title , desc , filter}) {
  return (
    <div className='flex flex-col w-2/6 gap-6'>
      <img className='w-full object-cover object-center h-96 rounded-xl' src={image} alt="" />
      <h1 className='font-medium text-2xl'>{title}</h1>
      <p className='font-medium'>{desc}</p>
      <div className='flex gap-2'>
        <button className='bg-slate-200 font-medium p-1 text-sm'>{filter[0]}</button>
        <button className='bg-slate-200 font-medium p-1 text-sm'>{filter[1]}</button>
      </div>
    </div>
  )
}

export default BlogProfile
