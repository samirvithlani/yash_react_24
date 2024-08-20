import React from 'react'
import { useFetchUserData } from '../services/userService'

export const QueryDemo1 = () => {
    const {isLoading,isError,data,refetch} = useFetchUserData()
    //console.log(res)
    console.log("data",data)
    console.log("isLoading",isLoading)
    console.log("isError..",isError)
  return (
    <div>
        <h1>QUERY DEMO 1</h1>
        {isLoading && <h1>Loading...</h1>}
        <button onClick={()=>refetch()}>Refetch</button>
    </div>
  )
}
