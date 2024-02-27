import React from 'react'
import AddCounter from './AddCounter'
import ResetCounter from './ResetCounter'
import MinusCounter from './minusCounter'

const Counter = () => {
  return (
    <div className='btn-group'>
        <AddCounter />
        <MinusCounter />
        <ResetCounter />
    </div>
  )
}

export default Counter