import React, { useRef, useState } from 'react'
import Header from './Header'
// import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { checkValidData } from "../Utils/validate"
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { GITHUB_URL_USER, NETFLIX_BG } from '../Utils/constants';
// import { gitHubIssueUrl } from '@craco/craco';


const Login = () => {
    const dispatch=useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    // const navigate=useNavigate();
    const email = useRef(null);
    const pwd = useRef(null);
    const name = useRef(null);
    const handleBtnClick = (() => {
        const nameValue = name.current ? name.current.value : null; // Handle null case

        const msg = checkValidData(email.current.value, pwd.current.value, nameValue);
        setErrMsg(msg);
        if (msg) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, pwd.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: GITHUB_URL_USER
                      }
                    
                    ).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                       dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                        // Profile updated!
                        // ...
                        // navigate("/browse")
                      }).catch((error) => {
                        setErrMsg(error.message)
                      });
                    // console.log(user)
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode+errorMessage)
                    // ..
                });

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
                
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // console.log(user);
    // navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode+errorMessage)
  });

        }
        // console.log(email)
        // console.log(pwd)

    })
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <div >
            <Header />
            <div>
                <img className='absolute w-full' src= {NETFLIX_BG}/>
            </div>
            <form className='bg-opacity-80 text-white absolute w-3/12 p-12 my-24 bg-black mx-auto right-0 left-0 ' onSubmit={(e) => { e.preventDefault() }}>
                <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input ref={name} type='text' placeholder='Full Name' className='bg-gray-700 p-4  my-2 w-full' />}

                <input ref={email} type='text' placeholder='Email Id' className='bg-gray-700 p-4  my-2 w-full' />

                <input ref={pwd} type='password' placeholder='Password' className='bg-gray-700 p-4 my-1 w-full' />
                <p className='text-red-500 text-lg py-1'>{errMsg}</p>
                <button onClick={handleBtnClick} className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                {/* <input type='text' placeholder='email' className='p-2 m-2'/> */}
                <p className='py-2 cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Netflix ? " : "Already a user ? "}<span className='font-bold'>{isSignIn ? "Sign Up now" : "Sign In "}</span></p>

            </form>
        </div>
    )
}

export default Login
