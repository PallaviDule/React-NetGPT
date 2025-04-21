import React, { useEffect } from 'react'
import LoginPage from './loginPage/LoginPage';
import Browse from './browse/Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/browse',
        element: <Browse />
    }
])

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(getFirebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body