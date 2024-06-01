import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import add from '../../Assetss/add.png'
import bike from '../../Assetss/bike.png'
import camera from '../../Assetss/camera.png'
import laptop from '../../Assetss/laptop.png'
import plane from '../../Assetss/travelling.png'
import { BsCurrencyDollar } from "react-icons/bs";





const SavingsOptions = [ 
    {
        icon: laptop,
        color:'bg-green-50',
        title:'New Laptop',
        price:400,
    },
    {
        icon: bike,
        color:'bg-red-200',
        title:'Dream bike',
        price:200,
    },
    {
        icon: plane,
        color:'bg-violet-200',
        title:'Holiday',
        price:14000,
    },
    {
        icon: camera,
        color:'bg-blue-200',
        title:'Camera',
        price:100,
    },
    {
        icon: add,
        color:'bg-gray-100',
    },

]

function Savings() {
  return (
    <div className='flex flex-col w-full h-90vh justify-center items-center gap-10 '>
        <div className='w-3/4 flex flex-col gap-6'>
        <h4 className='text-xl font-semibold'>Savings Accounts</h4>
      <h1 className='text-6xl font-semibold'>Organize your <br /> money the right way</h1>
      <h3 className='text-xl font-semibold flex justify-between gap-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente debitis veritatis maxime consectetur accusamus officia exercitationem <p className='text-emerald-400 text-lg flex w-2/5 justify-end items-center'>All Features <FaArrowRight/></p></h3>
        </div>
        <div className='flex justify-between gap-5 items-center'>
            {
                SavingsOptions.map((items)=>{
                    return (
                        <>                     
                            <div className='flex flex-col gap-4 justify-between'>
                            <div className={`w-60 h-48 rounded-lg flex justify-center items-center ${items.color}`}>
                                <img className='size-14' src={items.icon} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-medium text-xl'>{items.title}</h1>
                                <p className='text-gray-500 flex items-center'>{items.price}</p>    
                            </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Savings
