import React, { useRef, useState } from 'react'
import { NETFLIX_LOGIN_PAGE_BACKGROUND } from '../../constants/links';
import LoginHeader from './LoginHeader';
import { validateFormData } from '../../utils/validate';
import { getFirebaseAuth } from '../../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';

const inputFieldClassName = 'transparent bg-black border border-gray-200 rounded-lg h-[50px] m-2 px-3';

const LoginPage = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null); // useRef creates object email = {current: }
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  const handleSignIn = (event) => {
    console.log('email:', email, ' ,password:', password);
    console.log('email:', email.current.value, ' ,password:', password.current.value);
    event.preventDefault();
    const message = validateFormData(email.current.value, password.current.value, userName?.current?.value); // dev@gmail.com Dev!1234
    // console.log('errorMessage:', message);

    setErrorMessage(message);
    if(message) return;

    if(!isSignIn) {
      createUserWithEmailAndPassword(getFirebaseAuth, email.current.value, password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User in sign up:', user);
          updateProfile(getFirebaseAuth.currentUser, {
            displayName: userName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              const {uid, email, displayName, photoURL} = getFirebaseAuth.currentUser;
              dispatch(addUser({uid, email, displayName, photoURL}));
            }).catch((error) => {
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('User in sign up:', errorCode, ', error message:', errorMessage);

          setErrorMessage(errorMessage);
        });
    } else {
      console.log('User Sign in method', email.current.value, password.current.value);
      signInWithEmailAndPassword(getFirebaseAuth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          console.log('User in sign up:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          console.log('User in sign up:', errorCode, ', error message:', errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };
  const handleUseSignInCode = (event) => {
    event.preventDefault();
  };

  return (
    <div>
        <div className='absolute'>
            <img 
                alt='netflix-background-logo'
                src={NETFLIX_LOGIN_PAGE_BACKGROUND}
            />
        </div>
        <div className='w-full relative bg-gradient-to-b from-black'>
          <LoginHeader />
        </div>
        <form className='relative bg-black bg-opacity-85 flex flex-col w-4/12 m-auto p-12 content-center rounded-xl my-20 text-white'>
          <label className='text-3xl font-bold m-2'>{ isSignIn? 'Sign In' : 'Sign Up'}</label>
          {isSignIn? '':  
            <input 
              ref={userName}
              className={inputFieldClassName}
              type='text' 
              placeholder='Full Name'
            />
          }
          <input 
            ref={email}
            className={inputFieldClassName}
            type='text' 
            placeholder='Email or mobile number'
          />
          <input 
            ref={password}
            className={inputFieldClassName}
            type='password' 
            placeholder='Password' 
          />
          <button
              className='bg-red-600 font-bold rounded-lg h-[50px] m-2 px-3'
              onClick={(e) => handleSignIn(e)}
          >
            { isSignIn? 'Sign In' : 'Sign Up'}
          </button>
          {errorMessage && <p className='text-sm mx-2 text-red-500'>{errorMessage}</p>}
          <label className='text-center'>OR</label>
          { isSignIn ? 
          (
            <>
              <button
                  className='font-bold rounded-lg h-[50px] m-2 px-3 text-white bg-gray-400 bg-opacity-30'
                  onClick={handleUseSignInCode}
              >
                Use a Sign-In Code
              </button>
              <p className='text-sm m-2'>New to Netflix?
                <button className='font-bold' onClick={() => toggleSignInForm()}> 
                  Sign up now.
                </button>
              </p> 
            </>) : 
          (<p className='text-sm m-2'>Already Registered?
            <button className='font-bold' onClick={() => toggleSignInForm()}> 
              Sign In now.
            </button>
          </p>)}
          
        </form>
    </div>
  )
}

export default LoginPage