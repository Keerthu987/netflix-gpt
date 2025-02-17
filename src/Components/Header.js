import React, { use } from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import {  } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, NO_AVATAR, SUPPORTED_LANG } from '../Utils/constants';
import { toggleGPTSearch } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';

// import { auth } from '../Utils/firebase';
// import { reload } from 'firebase/auth/cordova';

const Header = () => {
  const user = useSelector(store => store.user);
  const lang = useSelector(store => store.config)
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    return () => unsubscribe()

  }, []);
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch())
  }
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  const showGPTSearch = useSelector(store => store.gpt.showGPT)
  return (
    <div className='flex w-full z-10 absolute px-8 py-2 bg-gradient-to-b from-black justify-between'>
      <img className='w-44 ' src={LOGO} />
      {user && <div className='flex p-2 items-center'>
       
       { showGPTSearch && <select onChange={handleLangChange} className='p-2 bg-gray-900 text-white m-2'>
       
          {SUPPORTED_LANG.map(l =>
            <option key={l.id} value={l.id}>{l.name}</option>

          )}
          {/* <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option> */}
        </select>
}
        <button onClick={handleGPTSearch} className='mx-2 my-2 py-2 px-4 bg-purple-800 rounded-lg text-white'>
          {showGPTSearch?"Home Page":"GPT Search"}</button>
        <img className='w-10 h-10 rounded-2xl' src={user ? user.photoURL : NO_AVATAR} />
        <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>

  )
}

export default Header



