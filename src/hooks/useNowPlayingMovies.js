import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/movieSlice';
import { TMDB_API_OPTIONS } from '../constants/tmdb';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  
    const getNowPlayingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_API_OPTIONS);
      const json = await data.json();
  
      console.log('Result', json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() =>{
      getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;