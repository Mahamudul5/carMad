import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './MyProfile.css'

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='my-profile'>
            <img className='' src={user?.photoURL} alt="" />
            <h3 className='mt-5 text-center'>Name: {user?.displayName}</h3>
            <h4 className='mt-2 text-center'>Email: {user?.email}</h4>


        </div>
    );
};

export default MyProfile;