import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const {register,handleSubmit} =useForm()
    //register : it is an object that contains the ref of the input element
    //handleSubmit : it is a function that is used to handle the form submission

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Form Demo 3</h1>
        <form onSubmit={handleSubmit}>

            <div>
                <input type='submit' value='Submit' />
            </div>
        </form>
    </div>
  )
}
