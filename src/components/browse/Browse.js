import React from 'react'
import BrowserHeader from './BrowserHeader';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './gpt/GptSearch';

const Browse = () => {
  const {showGptSearch} = useSelector(store => store.gpt);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className=''>
      <BrowserHeader/>
      {
        showGptSearch ? <GptSearch/> : 
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Browse;