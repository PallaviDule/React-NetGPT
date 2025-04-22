import React from 'react'
import MovieList from './secondaryContainer/MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  if(!movies.nowPlayingMovies || !movies.popularMovies) return;

  console.log('movies:', movies, (!movies.nowPlayingMovies && !movies.popularMovies));
  
  return (
    <div className='-mt-64'>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
      <MovieList title={'Popular Movies'} movies={movies.popularMovies}/>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer