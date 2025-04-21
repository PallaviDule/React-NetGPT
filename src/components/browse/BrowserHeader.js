import React, { useState } from 'react'
import LoginHeader from '../loginPage/LoginHeader'
import { USER_ICON } from '../../constants/links'
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const BrowserHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const openSignOut = () => {
        setShowDropdown(!showDropdown);
    }
    const handleSignOut = () => {
        signOut(getFirebaseAuth).then(() => {
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });          
    };

    return (
        <div className='flex w-full bg-gradient-to-b from-black justify-between'>  
            <div className='relative'>   
                <LoginHeader/>
            </div>
            <div>
                <img
                    className='w-10 h-10 mx-4 my-2'
                    alt='user logo'
                    src={USER_ICON}
                    onClick={openSignOut}
                />
                {showDropdown && 
                    <button onClick={handleSignOut}>Sign out</button>}
            </div> 
        </div>
    )
}

export default BrowserHeader