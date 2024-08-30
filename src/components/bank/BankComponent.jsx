import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit } from '../../redux/bankSlice';

export const BankComponent = () => {
    const [depositAmount, setdepositAmount] = useState(0)
    const dispatch = useDispatch();
    const depositHandler = (event)=>{

        //console.log("depositHandler...",event.target.value)
        //console.log("depositHandler...",depositAmount)
        dispatch(deposit(parseInt(depositAmount)))

    }
  return (
    <div>
        <h1>Bank Component</h1>
        <div>
            <h1>DEPOSIT</h1>
            <input type='text' placeholder='Enter amount to deposit' onChange={(event)=>{
            setdepositAmount(event.target.value)
            }}></input>
            <button onClick={depositHandler}>Deposit</button>
        </div>
    </div>
  )
}
