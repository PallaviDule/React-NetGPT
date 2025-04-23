export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWRmMGJiM2RhNjU3NmI2NTlhMTI2N2M5MTYzYzRkZSIsIm5iZiI6MTc0NTI2OTg2Mi4zMTcsInN1YiI6IjY4MDZiNDY2YzNlOGU3NGI2ZGVlNmIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-VqzsLvbk7Wog01OwqlZWWrTZa9Akt7FFvnLv4ndOU'
    }
  };

 export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w200' 
 export const TMDB_NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
 export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=2';
 export const SEARCH_BY_MOVIE_NAME_URL = 'https://api.themoviedb.org/3/search/movie';