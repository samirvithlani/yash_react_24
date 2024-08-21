import React from 'react'
import { useAddUserData } from '../services/userService'

export const QueryDemo2 = () => {
    const res = useAddUserData()
    console.log("idle...",res.isIdle)
    console.log("loading...",res.isPending)
    console.log("success...",res.isSuccess)
    console.log("error...",res.isError)
    console.log("data...",res.data)
    const submitHandler = ()=>{
        //form data..
        var data = {
            name:"ram",
            age:23,
            email:"ram@gmail.com",
            isActive:true
        }
        res.mutate(data)
    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>QueryDemo2</h1>
        {/* //form.. */}
        <button onClick={()=>{submitHandler()}}>ADD USER</button>
    </div>
  )
}
