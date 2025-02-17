import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black pl-12'>
      <div className='-mt-56 relative z-10'> 
      <MovieList title={"Now Playing"} movies={movies.playing}/>
      </div>
      <MovieList title={"Trending"} movies={movies.popular}/>
      <MovieList title={"Top-Rated"} movies={movies.topRated}/>
      <MovieList title={"Horror"} movies={movies.playing}/>
    </div>
  )
}

export default SecondaryContainer
