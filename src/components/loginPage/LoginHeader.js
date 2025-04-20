import React from 'react'
import { NETFLIX_LOGO } from '../../constants/links'

const LoginHeader = () => {
  return (
    <div className='w-[150px] relative bg-gradient-to-b from-black'>
        <img
            alt='netflix logo'
            src={NETFLIX_LOGO}
        />
    </div>
  )
}

export default LoginHeader