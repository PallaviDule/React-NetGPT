import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../redux/movieSlice';
import { TMDB_API_OPTIONS, TMDB_NOW_PLAYING_URL } from '../constants/tmdb';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const {nowPlayingMovies} = useSelector(store => store.movies)
  
    const getNowPlayingMovies = async() => {
      const data = await fetch(TMDB_NOW_PLAYING_URL, TMDB_API_OPTIONS);
      const json = await data.json();
  
     // console.log('Result', json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() =>{
      !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;