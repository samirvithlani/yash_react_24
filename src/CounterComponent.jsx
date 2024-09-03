import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './redux/counterSlice'

export const CounterComponent = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>COUNTER CCOMPONENT</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
    </div>
  )
}
