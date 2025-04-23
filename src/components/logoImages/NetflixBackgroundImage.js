import React from 'react'
import { NETFLIX_LOGIN_PAGE_BACKGROUND } from '../../constants/links'

const NetflixBackgroundImage = () => {
  return (
    <div className='fixed'>
        <img 
            alt='netflix-background-logo'
            src={NETFLIX_LOGIN_PAGE_BACKGROUND}
        />
    </div>
  )
}

export default NetflixBackgroundImage