import React from 'react'

function Footer() {

    const FooterData =[
        {
            title:'About',
            contents:['Features','Pricing','Support']
        },
        {
            title:'Blog',
            contents:['Products','Technology','Crypto']
        },
        {
            title:'Webflow',
            contents:['Styleguide','Licensing','Changelog']
        },
        {
            title:'Social Media',
            contents:['Twitter','Facebook','Instagram']
        },
    ]

  return (
    <div className='flex w-full h-50vh justify-center py-14'>
      <div className='w-4/5 h-full'>
        <div className='w-full flex border-b-2 h-5/6 py-6'>
            <div className='w-4/12 h-full text-emerald-400 text-4xl font-bold'>banquee.</div>
            {
                FooterData.map((items)=>{
                    return(
                        <div className='flex flex-col justify-between w-2/12 h-full'>
                            <div className='py-4'>
                                <h1 className='font-medium text-xl'>{items.title}</h1>
                            </div>
                            <div className='text-lg flex flex-col gap-4 font-medium text-gray-400'>
                                <h1>{items.contents[0]}</h1>
                                <h1>{items.contents[1]}</h1>
                                <h1>{items.contents[2]}</h1>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        <div className='h-1/6 flex items-end'>
            <div className='flex w-full justify-between'>
                <div>
                &copy; Made by <span className='text-emerald-400'>Pawel Gola</span> - Powered by <span className='text-emerald-400' >Webflow</span>
                </div>
                <div className='flex gap-4 text-gray-400'><h1>Impressum</h1><h1>Datenschutz</h1></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
