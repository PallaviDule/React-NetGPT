import React from 'react'
import { NETFLIX_LOGO } from '../../constants/links'

const LoginHeader = () => {
  return (
        <img
            className='w-[150px]'
            alt='netflix logo'
            src={NETFLIX_LOGO}
        />
  )
}

export default LoginHeader