import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  const shows = [

    {
        id:101,
        name:"Money Heist",
        seasons:5,
    },
    {
        id:102,
        name:"Breaking Bad",
        seasons:5,
    },
    {
        id:103,
        name:"Game of Thrones",
        seasons:8,
    }
]
  return (
    <div>
      <h1>SHOWS</h1>
      {/* <Link to = "/netflixshows/play/1">Money Heiest</Link>
      <Link to = "/netflixshows/play/2">Breaking Bad</Link> */}
      <ul>
        {
          shows?.map((show)=>{
            return <li> <Link to ={`/netflixshows/play/${show.id}`}>{show.name}</Link></li>
          })
        }
      </ul>
    </div>
  )
}
