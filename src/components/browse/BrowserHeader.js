import React, { useState } from 'react'
import Header from '../Header'
import { USER_ICON } from '../../constants/links'
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from '../../utils/firebase';

const BrowserHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const openSignOut = () => {
        setShowDropdown(!showDropdown);
    }
    const handleSignOut = () => {
        signOut(getFirebaseAuth);        
    };

    return (
        <div className='flex w-full bg-gradient-to-b from-black justify-between'>  
            <Header/>
            <div className='text-white flex flex-col'>
                <div className='flex'>
                    <button>Gpt Search</button>
                    <img
                        className='w-10 h-10 mx-4 my-2'
                        alt='user logo'
                        src={USER_ICON}
                        onClick={openSignOut}
                    />
                </div>
                {showDropdown && 
                    <button onClick={handleSignOut} className='text-end absolute right-0 top-10 m-2 overflow-y-auto'>Sign out</button>
                }
            </div> 
        </div>
    )
}

export default BrowserHeader