import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPT } from '../Utils/constants'

const Browse = () => {
  const favMovie=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1cb05e393b076cf9afc71e2a6c5bf587', API_OPT)

   const json=await data.json();
   console.log(json.results);
  }
  useEffect(()=>{
     favMovie();
  },[])
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
