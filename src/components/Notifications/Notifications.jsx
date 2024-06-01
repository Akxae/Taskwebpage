import React from 'react'
import NotificationsLeft from './NotificationsLeft'
import NotificationsRight from './NotificationsRight'

function Notifications() {
  return (
    <>
    <div className='w-full flex justify-center items-center h-90vh'>
    <NotificationsLeft/>
    <NotificationsRight/>
    </div>
    
    </>
  )
}

export default Notifications
