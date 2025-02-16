import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Error from './Error'

import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
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

   
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
