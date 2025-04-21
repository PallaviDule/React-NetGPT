import React, { useEffect } from 'react'
import { NETFLIX_LOGO } from '../constants/links'
import {onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getFirebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties: https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName})); 
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);
  return (
        <img
            className='w-[150px]'
            alt='netflix logo'
            src={NETFLIX_LOGO}
        />
  )
}

export default Header;