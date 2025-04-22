import React from 'react';
import useCurrentMovieTrailer from '../../hooks/useCurrentMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackgraound = ({id}) => {
    const currentlyPlayingMovieTrailer = useSelector(store => store.movies?.currentlyPlayingMovieTrailer);
    useCurrentMovieTrailer(id);

    if(!currentlyPlayingMovieTrailer) return;

 // console.log('currentlyPlayingMovieTrailer', currentlyPlayingMovieTrailer);

  return (
    <div className=''>
        <iframe 
            className='w-full aspect-video'
            src={`https://www.youtube.com/embed/${currentlyPlayingMovieTrailer.key}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackgraound