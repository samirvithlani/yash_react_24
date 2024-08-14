import React from 'react'

export const MyButton = (props) => {
  return (
    <button onClick={()=>{
        props.funName()
    }}>{props.name}</button>
  )
}
