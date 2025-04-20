import React, { useState } from 'react'
import { NETFLIX_LOGIN_PAGE_BACKGROUND } from '../../constants/links';
import LoginHeader from './LoginHeader';

const LoginPage = () => {
  const [isSignIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div>
        <div className='absolute'>
            <img 
                alt='netflix-background-logo'
                src={NETFLIX_LOGIN_PAGE_BACKGROUND}
            />
        </div>
        <LoginHeader />
        <form className='relative bg-black bg-opacity-85 flex flex-col w-4/12 m-auto p-12 content-center rounded-xl my-20 text-white'>
          <label className='text-3xl font-bold m-2'>{ isSignIn? 'Sign In' : 'Sign Up'}</label>
          {isSignIn? '':  
            <input 
              className='transparent bg-black border border-gray-200 rounded-lg h-[50px] m-2 px-3'
              type='text' 
              placeholder='Full Name'
            />
          }
          <input 
            className='transparent bg-black border border-gray-200 rounded-lg h-[50px] m-2 px-3'
            type='text' 
            placeholder='Email or mobile number'
          />
          <input 
            className='transparent bg-black border border-gray-200 rounded-lg h-[50px] m-2 px-3'
            type='password' 
            placeholder='Password' 
          />
          <button
              className='bg-red-600 font-bold rounded-lg h-[50px] m-2 px-3'
          >
            { isSignIn? 'Sign In' : 'Sign Up'}
          </button>
          <label className='text-center'>OR</label>
          { isSignIn ? 
          (
            <>
              <button
                  className='font-bold rounded-lg h-[50px] m-2 px-3 text-white bg-gray-400 bg-opacity-30'
                  type="button"
              >
                Use a Sign-In Code
              </button>
              <p className='text-sm m-2'>New to Netflix?
                <button className='font-bold' onClick={() => toggleSignInForm()} type="button"> 
                  Sign up now.
                </button>
              </p> 
            </>) : 
          (<p className='text-sm m-2'>Already Registered?
            <button className='font-bold' onClick={() => toggleSignInForm()} type="button"> 
              Sign In now.
            </button>
          </p>)}
          
        </form>
    </div>
  )
}

export default LoginPage