import React from 'react'

function NotificationsRight() {

   const NotificationData = ['You payment of 49 has been processed!','You get a new support message!','You payment was declined!' ,'Please verify your payment of 99!' , 'New account statistics are available']

  return (
    <div className='h-full 2/5 p-16 flex flex-col gap-6 items-start '>
    {
        NotificationData.map((item , index)=>{
            return(

                <div className='w-full  mt-2 rounded-md bg-slate-100 flex items-center p-4 justify-around'>
                    <div className='w- h-fit rounded-lg p-2 flex justify-center items-center bg-emerald-400 font-bold text-4xl text-white'>b.</div>    
                    <div className='flex-1 pl-4'>
                        <h3 className='font-medium text-xl'>Banko.</h3>
                        <h4 className='font-medium'>{item}</h4>
                    </div>
                
                </div>
            )
        })
    }
    </div> 
  )
}

export default NotificationsRight
