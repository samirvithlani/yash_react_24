import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixHome = () => {
  return (
    <div>
      <h1>Netflix Home</h1>
      <ul>
        <li>
          <Link to ="/netflixhome/wishlist">wishlist</Link>
        </li>
        <li>
          <Link to ="wishlist">wishlist</Link>
        </li>
      </ul>
    </div>
  )
}
