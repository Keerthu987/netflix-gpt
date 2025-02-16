import React, { use } from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import {  } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, NO_AVATAR } from '../Utils/constants';

// import { auth } from '../Utils/firebase';
// import { reload } from 'firebase/auth/cordova';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")

    }).catch((error) => {
      // An error happened.
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");

        // ...
      }
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    });

    return ()=> unsubscribe()

  }, []);
  return (
    <div className='flex w-full z-10 absolute px-8 py-2 bg-gradient-to-b from-black justify-between'>
      <img className='w-44 ' src= {LOGO}/>
      {user && <div className='flex p-2 items-center'>
        <img className='w-10 h-10 rounded-2xl' src={user ? user.photoURL : NO_AVATAR} />
        <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>

  )
}

export default Header



