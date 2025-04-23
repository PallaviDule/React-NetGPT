import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import NetflixBackgroundImage from '../../logoImages/NetflixBackgroundImage'

const GptSearch = () => {
  return (
    <div>
        <NetflixBackgroundImage />
        <div className='relative bg-black bg-opacity-70 w-screen aspect-video'>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    </div>
  )
}

export default GptSearch