import React from 'react'
import HelpLeft from './HelpLeft';
import HelpRight from './HelpRight';



function HelpSection() {
  return (
    <div className='w-full h-80vh flex justify-center items-cente border-b-2'>
        <div className='w-9/12 h-3/4 flex'>
            <HelpLeft/>
            <HelpRight/>
            
        </div>
      
    </div>
  )
}

export default HelpSection
