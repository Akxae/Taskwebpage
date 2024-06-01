import React from 'react'
import FeaturesLeft from './FeaturesLeft'
import FeaturesRight from './FeaturesRight'

function Features() {
  return (
    <div className='bg-black w-full h-110vh c flex'>
      <FeaturesLeft/>
      <FeaturesRight/>
    </div>
  )
}

export default Features
