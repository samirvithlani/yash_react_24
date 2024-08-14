import React, { useContext } from 'react'
import { ProductContext } from '../../productContext'

export const ProductDetail = () => {
    const {pname} = useContext(ProductContext)
  return (
    <div>ProductDetail - {pname}</div>
  )
}
