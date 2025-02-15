import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <div >
            <Header />
            <div>
                <img className='absolute w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_medium.jpg'
                />
            </div>
            <form className='bg-opacity-80 text-white absolute w-3/12 p-12 my-24 bg-black mx-auto right-0 left-0 '>
                <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
             { !isSignIn &&  <input type='text' placeholder='Full Name' className='bg-gray-700 p-4  my-2 w-full' />}
                
                <input type='text' placeholder='Email Id' className='bg-gray-700 p-4  my-2 w-full' />

                <input type='password' placeholder='Password' className='bg-gray-700 p-4 my-1 w-full' />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                {/* <input type='text' placeholder='email' className='p-2 m-2'/> */}
                <p className='py-2 cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Netflix ? " : "Already a user ? "}<span className='font-bold'>{isSignIn ? "Sign Up now" : "Sign In "}</span></p>

            </form>
        </div>
    )
}

export default Login
