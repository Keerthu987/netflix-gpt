import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import Error from './Error'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { reload } from 'firebase/auth/cordova';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
// import {  } from 'react-router-dom'

const Body = () => {
    const dispatch=useDispatch();
    // const navigate=useNavigate();
    const appRouter = createBrowserRouter([{
        path: "/",
        element: <Login />,
        // errorElement: <Error />
    },
    {
        path: "/browse",
        element: <Browse />
    }]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
// navigate("/browse");

              // ...
            } 
            else {
              // User is signed out
              dispatch(removeUser());
            //   navigate("/")
              // ...
            }
          });

          if (auth.currentUser) {
            auth.currentUser.reload().then(() => {
              const updatedUser = auth.currentUser;
              dispatch(addUser({
                uid: updatedUser.uid,
                email: updatedUser.email,
                displayName: updatedUser.displayName,
                photoURL: updatedUser.photoURL,
              }));
              // navigate("/browse");
            });
          }
    },[])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
