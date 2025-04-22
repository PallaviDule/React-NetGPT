import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackgraound from './VideoBackgraound';

const MainContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!nowPlayingMovies) return;

    const showMovie = nowPlayingMovies[0];
    return (
        <div>
            <VideoTitle title={showMovie.original_title} overview={showMovie.overview}/>
            <VideoBackgraound id={showMovie.id}/>
        </div>
    )
}

export default MainContainer