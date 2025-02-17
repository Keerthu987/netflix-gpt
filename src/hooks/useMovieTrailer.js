import React, { useEffect } from 'react'
import { API_OPT } from '../Utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../Utils/movieSlice';


const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();
     // const [trailerID,setTrailerID]=useState(null);
     
  
   const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPT);
    const json = await data.json();
    // console.log(json)
    const filterTrailer = json.results.filter((v) => v.type == "Trailer")
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    // setTrailerID(trailer.key) 1way
    dispatch(addTrailer(trailer));
    // console.log(trailer)
}
useEffect(() => {
    getMovieVideo()
}, [])
  return (
    <div>
       
   
    </div>
  )
}

export default useMovieTrailer
