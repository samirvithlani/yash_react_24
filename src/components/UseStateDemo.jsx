import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count = 0;
    var [count,setCount] = useState(0)
    //count ->state variable...
    //setCount--> function to update the state variable...
    
    //0 --> initial value of the state variable...
    //const [isLoading, setisLoading] = useState(false)
    //const [name, setName] = useState("")
    //const [age, setAge] = useState(0)
    //const [address, setAddress] = useState({})
    //const [marks, setMarks] = useState([])
    //const [isAuth, setIsAuth] = useState()
    const increseCount = () => {
        console.log("increseCount", count);
        setCount(count+1)
        console.log("increseCount--->", count);
    }
  return (
    <div>   
        <h1>Count: {count}</h1>
        <button onClick={()=>{increseCount()}}>+</button>
    </div>  
  )
}
