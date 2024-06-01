import React from 'react'

import CardInCard from './CardInCard';

function Cards() {
  return (
    <div className='w-full h-110vh flex justify-center '>
        <div className='w-1/3 mt-20'>
            <div className='flex flex-col items-center gap-6'>
                <h3 className='text-xl font-semibold' >Account</h3>
                <h1 className='text-6xl font-semibold text-center'>Perfect card <br /> for your needs</h1>
                <p className='text-xl font-semibold text-center'>Senectus et netus et malesuada fames ac turpis. 
                    Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div className='h-fit'>
                
                <CardInCard color={'bg-emerald-400'}/>
                <CardInCard color={'bg-gray-900'} position = {'bottom-60'}/>
                <CardInCard color={'bg-orange-200'} position = {'bottom-30'}/>
            </div>
            <div className='flex gap-6 justify-center relative bottom-96'>
                <button className='bg-emerald-400 p-3 text-xl rounded-lg'>Open Account</button>
                <button className='border p-3 text-xl rounded-lg'>Compare Cards</button>
            </div>
      </div>
    </div>
  )
}

export default Cards
