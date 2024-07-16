import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register,handleSubmit}=useForm()
    //register is used to register the input fields, and ref=giser is an object
    //handleSubmit is used to handle the form submission
    const submitHandler = (data) => {
        console.log("submit handler...",data)
    
    }
  return (
    <div>
        <h1>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='email' {...register("email")}></input>
            </div>
            <div>
                <label>Gender</label>
                Male : <input type='radio' value="male" name="gender"{...register("gender")}></input> <br></br>
                feMale : <input type='radio' value="female" name ="gender" {...register("gender")}></input> 
            </div>
            <div>
                <select {...register("city")}>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nagpur">Nagpur</option>
                </select>
            </div>
            <div>
                <label>COlor</label>
                <input type='color' {...register("color")}></input>
            </div>

            <input type='submit' value='Submit'/>   
        </form>
    </div>
  )
}
