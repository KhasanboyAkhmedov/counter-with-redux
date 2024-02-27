import React from 'react'
import { useDispatch } from 'react-redux'
import { plusCounter } from '../reducers/countSlice'

const AddCounter = () => {
    const dispatch = useDispatch()

  return <button className='btn btn-success' onClick={() => dispatch(plusCounter())}>Plus</button>
}

export default AddCounter