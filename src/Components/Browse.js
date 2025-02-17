import React  from 'react'
import Header from './Header'
import useGetMovie from '../hooks/useGetMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';

const Browse = () => {
  useGetMovie();
  usePopularMovies();
  useTopRated();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
