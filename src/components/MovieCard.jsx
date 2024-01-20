import React from 'react'
import { TMDB_ImageCDNUrl } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='cursor-pointer rounded-md shadow-md shadow-gray-600'>
       <img className='md:w-36 w-56 sm:w-44 hover:scale-105 duration-200 object-cover rounded-md' src={TMDB_ImageCDNUrl+posterPath} alt="movie image" />
    </div>
  )
}

export default MovieCard