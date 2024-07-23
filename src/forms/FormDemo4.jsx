import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            name:"test123"
        },
        mode:"all"
    })
    const submitHandler = (data) => {
        console.log("submit handler...",data)
    }
    console.log("errors : ",errors)

    const validationSchema = {
        email:{
            required:{
                value:true,
                message:"email is required*"
            }
        },
        age:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"age should be greater than 18*"
            },
            max:{
                value:60,
                message:"age should be less than 60*"
            }
        },
        contact:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"contact should be 10 digits*"
            }
        
        }
    }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Form Demo 4-validation</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                <span>
                    {
                        errors.name && errors.name.message
                    }
                </span>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='email' {...register("email",validationSchema.email)}></input>
                {
                    errors.email && errors.email.message
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.age)}></input>
                {
                    errors.age && errors.age.message
                
                }
            </div>
            <div>
                <label>Phone</label>
                <input type='text' {...register("phone",validationSchema.contact)}></input>
                {
                    errors.phone && errors.phone.message
                }
            </div>
            <div>
                <input type='submit' value='Submit' />
            </div>
        </form>
    </div>
  )
}
