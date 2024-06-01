import React from 'react'
import TransactionRight from './TransactionRight'
import TransactionLeft from './TransactionLeft'

function Transactions() {
  return (
    <div className='flex bg-green-50 w-full h-90vh px-40 overflow-hidden'>
      <TransactionLeft/>
      <TransactionRight/>
    </div>
  )
}

export default Transactions
