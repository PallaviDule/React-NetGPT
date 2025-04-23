import React, { useRef } from 'react';
import language from '../../../constants/language';
import openai from '../../../utils/openAI';
import { SEARCH_BY_MOVIE_NAME_URL, TMDB_API_OPTIONS } from '../../../constants/tmdb';
import { useDispatch } from 'react-redux';
import { addGptMovieSearchResult } from '../../../redux/gptSlice';

const GptSearchBar = () => {
  const searchText = useRef('');
  const dispatch = useDispatch();

  const searchMovieTMDB = async(movie) => {
    const data = await fetch(`${SEARCH_BY_MOVIE_NAME_URL}?query=${movie}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS);
    const json = await data.json();

    return json.results;
  }

  const handleGptSearchClick = async() => {
    // const gptResult = await openai.chat.completions.create({     // might get 429 if billing is not set.
    //     messages: [{ role: 'user', content: searchText.current.value }],
    //     model: 'gpt-3.5-turbo',
    //   });

    // As chatgpt needed billing, mocking that api call response as we get from openai api response.
    const gptResult = {
      choices: [{
        message: {
          content: 'Andaz Apna Apna,Hera Pheri,Padosan,Amar Akbar Anthony' // searched for indian funny movies
        }
      }]
    }

    if(!gptResult) {
      // ToDo: Error Message may be
    }
     const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseMoviesList = gptMovies.map(gptMovie => searchMovieTMDB(gptMovie)); // this will give promises for all movie name list
    const tmdbResult = await Promise.all(promiseMoviesList);

    // console.log('tmdb result:', tmdbResult);
    dispatch(addGptMovieSearchResult({movieResult: tmdbResult, moviesName: gptMovies }));
  };

  return (
    <div className='pt-[15%] flex justify-center'>
        <form 
          className='w-1/2 grid grid-flow-col bg-black rounded-lg shadow-sm shadow-white' 
          onSubmit={(e) => e.preventDefault()}
        >
            <input
              ref={searchText}
              type='text'
              className='p-4 m-4 col-span-10'
              placeholder='What would you like to watch today?'
            />
            <button 
              className='p-4 m-4 bg-red-600 text-white rounded-lg col-span-2' 
              type='button' 
              onClick={handleGptSearchClick}>  
                {language.SEARCH} 
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar