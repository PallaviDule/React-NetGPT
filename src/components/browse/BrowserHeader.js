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
            <div>
                <img
                    className='w-10 h-10 mx-4 my-2'
                    alt='user logo'
                    src={USER_ICON}
                    onClick={openSignOut}
                />
                {showDropdown && 
                    <button onClick={handleSignOut} className='text-white'>Sign out</button>}
            </div> 
        </div>
    )
}

export default BrowserHeader