import React from 'react'
import { auth } from '../Utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='flex w-full z-10 absolute px-8 py-2 bg-gradient-to-b from-black justify-between'> 
      <img className='w-44 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
/> 
{user &&<div className='flex p-2 items-center'>
  <img className='w-10 h-10 rounded-2xl' src={user? user.photoURL :'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'}/>
  <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
  </div> }  
</div>

  )
}

export default Header



 