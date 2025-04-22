import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import NetflixBackgroundImage from '../../logoImages/NetflixBackgroundImage'

const GptSearch = () => {
  return (
    <div>
        <NetflixBackgroundImage />
        <div className='relative'>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    </div>
  )
}

export default GptSearch