import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayShow = () => {
    const {id} = useParams()

   
  return (
    <div>
        <h1>PLaying show no = {id}</h1>
    </div>
  )
}
