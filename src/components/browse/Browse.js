import React from 'react'
import BrowserHeader from './BrowserHeader';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <BrowserHeader/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;