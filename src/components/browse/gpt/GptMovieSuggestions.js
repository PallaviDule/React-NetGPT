import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../secondaryContainer/MovieList';

const GptMovieSuggestions = () => {
  const {gptMoviesResult, moviesName} = useSelector(store => store.gpt);

  if(!moviesName) return; // ToDO : may be any shimmer UI or loading
  return (
    <div className='my-10'>
      {moviesName.map((movieName, index) => 
        <MovieList 
          title={movieName} 
          movies={gptMoviesResult[index]}  
          key={movieName}
        />)}
    </div>
  )
}

export default GptMovieSuggestions