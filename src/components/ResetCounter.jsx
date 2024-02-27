import React from 'react'
import { resetCounter } from '../reducers/countSlice'
import { useDispatch } from 'react-redux'

const ResetCounter = () => {
    const dispatch = useDispatch()

  return <button className='btn btn-danger' onClick={() => dispatch(resetCounter())}>Reset</button>
}

export default ResetCounter