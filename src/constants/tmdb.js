export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

 export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w200' 
 export const TMDB_NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
 export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=2';
 export const SEARCH_BY_MOVIE_NAME_URL = 'https://api.themoviedb.org/3/search/movie';