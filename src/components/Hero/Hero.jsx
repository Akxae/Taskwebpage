import React from 'react'
import HeroCard from "./HeroCard"

import { FaArrowRight } from "react-icons/fa6";
function Hero() {
  return (
    <div className='h-screen w-full overflow-hidden' >
        <div className='h-2/4 w-full bg-green-50 flex justify-center items-center'>
            <div className='w-2/4 h-4/6 flex justify-between items-center flex-col'>
                <h4 className='font-medium'>Features</h4>
                <h1 className='text-7xl font-medium'>All in one card.</h1>
                <p className='font-medium'>Senectus et netus malesuada fames ac turpis</p>
                <p className='font-medium'>Sagittis vitae et leo duis ut diam.</p>
                <div className='flex gap-4'>
                    <button className='bg-emerald-400 rounded-lg p-2 text-white'>Open Account</button>
                    <button className='flex justify-center items-center gap-1 font-medium text-emerald-400'> Compare Cards <FaArrowRight/></button>
                </div>
            </div>
        </div>
        <div className='w-full h-2/4'>
        <HeroCard/>
        </div>
        
        
      
    </div>
  )
}

export default Hero
