import React from 'react';
import language from '../../../constants/language';

const GptSearchBar = () => {
  return (
    <div className='pt-[15%] flex justify-center bg-b'>
        <form className='w-1/2 grid grid-flow-col bg-black rounded-lg'>
            <input
                type='text'
                className='p-4 m-4 col-span-10'
                placeholder='What would you like to watch today?'
            />
            <button className='p-4 m-4 bg-red-600 text-white rounded-lg col-span-2' type='button'>  
                {language.SEARCH} 
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar