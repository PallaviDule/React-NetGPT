import React from 'react'
import { TMDB_IMAGE_URL } from '../../../constants/tmdb'

const MovieCard = ({posterPath}) => {
  return (
    <div className='px-1 w-40 flex-shrink-0 '>
        <img 
            alt='movie card'
            src={`${TMDB_IMAGE_URL}${posterPath}`}
        />
    </div>
  )
}

export default MovieCard