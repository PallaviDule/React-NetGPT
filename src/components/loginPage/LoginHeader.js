import React from 'react'
import { NETFLIX_LOGO } from '../../constants/links'

const LoginHeader = () => {
  return (
    <div className='w-full relative bg-gradient-to-b from-black'>
        <img
            className='w-[150px]'
            alt='netflix logo'
            src={NETFLIX_LOGO}
        />
    </div>
  )
}

export default LoginHeader