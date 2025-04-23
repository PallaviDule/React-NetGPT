import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../redux/movieSlice';
import { POPULAR_MOVIES_URL, TMDB_API_OPTIONS } from '../constants/tmdb';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const {popularMovies} = useSelector(store => store.movies)

  
    const getPopularMovies = async() => {
      const data = await fetch(POPULAR_MOVIES_URL, TMDB_API_OPTIONS);
      const json = await data.json();
  
      // console.log('Result', json.results);
      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(() =>{
      !popularMovies && getPopularMovies();
    }, []);
};

export default usePopularMovies;