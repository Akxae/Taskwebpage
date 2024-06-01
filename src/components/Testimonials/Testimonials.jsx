import React from 'react'
import { BsStarFill } from "react-icons/bs";


function Testimonials() {

    const TestimonialsData = [
        {
            title : 'Sunt qui esse pariatur duis deserunt mollit ',
            desc:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
            user:'Cody Fisher',
            post:'Medical Assistant'
        },
        {
            title : 'At lectus urna duis convallis tellus ',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morb"  +
            "In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.",
            user:'Jenny Wilson',
            post:'Nursing Assistant'
        },
        {
            title : 'Elit aute irure tempor cupidatat incididunt ',
            desc:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. ',
            user:'Guy Hawkins',
            post:'President of sales'
        },
        {
            title : 'Sunt qui esse pariatur duis deserunt mollit ',
            desc:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
            user:'Cody Fisher',
            post:'Medical Assistant'
        },
        {
            title : 'Donec et fringilla neque ',
            desc:'Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum. ',
            user:'Dianne Russell',
            post:'Medical Assistant'
        },
        {
            title : 'Etiam accumsan porta neque eros ',
            desc:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.  ',
            user:'Darlene Robertson',
            post:'Dog Trainer'
        },
    ]



  return (
    <div className='w-full h-110vh flex justify-center items-center'>
      <div className='w-9/12 flex flex-col gap-10'>
        <div className='w-full flex justify-between items-end'>
            <div className='w-1/2 flex flex-col gap-2'>
            <h3 className='text-xl font-semibold'>Testimonials</h3>
            <h1  className='text-6xl font-semibold'>People all over the <br /> world use banko.</h1>
            </div>
            
            <div className='flex w-1/2 justify-center gap-2 items-center pl-48'>
                <div className='rounded-full bg-gray-50 h-fit p-1'><BsStarFill className='fill-emerald-400'/></div>
                <h1 className='text-lg'>Rated <span className='text-emerald-400'>4.8/5</span> from over 1000 users</h1>
            </div>
        </div>
        <div className='flex flex-wrap gap-6'>
            {
                TestimonialsData.map((item)=>{
                    return (
                        <div className='w-96 h-fit border p-5 rounded-lg flex flex-col gap-5'>
                            <div className='flex'>
                                <BsStarFill className='fill-emerald-400'/>
                                <BsStarFill className='fill-emerald-400'/>
                                <BsStarFill className='fill-emerald-400'/>
                                <BsStarFill className='fill-emerald-400'/>
                                <BsStarFill className='fill-emerald-400'/></div>
                            <h1 className='font-medium text-xl'>{item.title}</h1>
                            <p>{item.desc}</p>
                            <div className='flex flex-col '>
                            <h1 className='font-medium'>{item.user}</h1>
                            <h1 className='font-light'>{item.post}</h1>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonials
