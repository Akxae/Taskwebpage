import React from 'react'
import card1 from '../../Assetss/card1.jpg'
import card2 from '../../Assetss/card2.jpg'
import card3 from '../../Assetss/card3.jpg'
import BlogProfile from './BlogProfile'
import {FaArrowRight} from 'react-icons/fa'

function Blog() {

    const cardData = [
        {
            image:card1,
            title:'How To Start Using Banko For Your Startup',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
            filter:['product' , 'Technology']
        },
        {
            image:card2,
            title:'10 Things Nobody Told You About Banko',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
            filter:['product' , 'Technology']
        },
        {
            image:card3,
            title:'7 Ways To Improve You Saving Habits',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
            filter:['product' , 'Technology']
        },
]

  return (
    <div className='w-full h-110vh  flex justify-center items-center border-b-2'>
      <div className='w-9/12 h-5/6 flex flex-col  gap-4'>
        <div className='flex w-full justify-between p-7'>
            <h1 className='text-6xl font-semibold'>Blog</h1>
            <h3 className='flex justify-center items-center gap-3 text-emerald-400 pr-4 font-medium'> All Articles <FaArrowRight/></h3>

        </div>
        <div className='flex justify-between gap-10 px-7'>
        {
            cardData.map((item)=>{
                return (
                    <BlogProfile image={item.image} title={item.title} desc={item.desc} filter={item.filter}  />   
                )
            })
        }
        </div>
        
        
      </div>
    </div>
  )
}

export default Blog

