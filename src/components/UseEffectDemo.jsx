import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //()=>{} called as callback function
    //[] called as dependency array

    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useEffect called")
    },[count])

  return (
    <div>
        <h1>USE EFFECT DEMO</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
  )
}
