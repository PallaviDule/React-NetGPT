import React, { useState } from 'react'
import Header from '../Header'
import { USER_ICON } from '../../constants/links'
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { hideGptView, toggleGptSearchView } from '../../redux/gptSlice';
import { Link } from 'react-router-dom';

const BrowserHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

    const openSignOut = () => {
        setShowDropdown(!showDropdown);
    }
    const handleSignOut = () => {
        signOut(getFirebaseAuth);        
    };
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }
    const handleHomeClick = () => {
        dispatch(hideGptView());
    }

    return (
        <div className='flex w-full bg-gradient-to-b from-black justify-between fixed z-10'>  
            <Header/>
            <div className='text-white flex flex-col'>
                <div className='flex'>
                    <button  className='m-1 hover:font-bold hover:underline' onClick={handleHomeClick}>Home</button>
                    <button onClick={handleGptSearch} className='hover:font-bold hover:underline m-1 p-1'>Gpt Search</button>
                    <img
                        className='w-10 h-10 mx-4 my-2'
                        alt='user logo'
                        src={USER_ICON}
                        onClick={openSignOut}
                    />
                </div>
                {showDropdown && 
                    <button onClick={handleSignOut} className='text-end absolute right-0 top-10 m-2 overflow-y-auto z-50'>Sign out</button>
                }
            </div> 
        </div>
    )
}

export default BrowserHeader