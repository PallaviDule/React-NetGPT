import React from 'react'
import BrowserHeader from './BrowserHeader';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className='bg-black'>
      <BrowserHeader/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;