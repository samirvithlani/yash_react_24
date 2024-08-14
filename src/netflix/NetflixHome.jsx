import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../appContext'

export const NetflixHome = () => {
  const {title} = useContext(AppContext)
  return (
    <div>
      <h1>Netflix Home {title}</h1>
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
