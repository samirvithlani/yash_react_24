import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ApiDemo2 = () => {
    const navigate = useNavigate()
    const addUser = async()=>{
        const user = {
            name:"kunal",
            age:23,
            email:"kunal@gmail.com",
            isActive:true
        }

        const res  = await axios.post("https://node5.onrender.com/user/user",user)
        console.log(res);
        if(res.status ===201){
            //redirecrt api demo1..
            navigate("/apidemo1")
        }


    }
  return (
    <div>
        <h1 style={{ textAlign: "center" }}>API Demo 2</h1>
         <button onClick={()=>{addUser()}}>Add User</button>  
    </div>
  )
}
