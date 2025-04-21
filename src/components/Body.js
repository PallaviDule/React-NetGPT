import React from 'react'
import LoginPage from './loginPage/LoginPage';
import Browse from './browse/Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

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
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body