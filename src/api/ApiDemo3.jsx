import axios from 'axios';
import React from 'react'

export const ApiDemo3 = () => {


    const postData = async()=>{

        const obj = {
            name:"yash",
            email:"yash@gmail.com",
            age:23,
            status:"active",
            gender:"male"
        }

        try{

            const res = await axios.post("https://gorest.co.in/public/v2/users",obj,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(res);

        }catch(err){
            console.log(err);
        }


    }
  return (
    <div>
        <h1>Api Demo 3</h1>
        <button onClick={()=>{postData()}}>Post Data</button>
    </div>
  )
}
