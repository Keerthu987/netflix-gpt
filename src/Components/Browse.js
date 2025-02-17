import React  from 'react'
import Header from './Header'
import useGetMovie from '../hooks/useGetMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPT=useSelector(store=>store.gpt.showGPT)
  useGetMovie();
  usePopularMovies();
  useTopRated();
  return (
    <div>
      <Header/>
    {showGPT?  <GPTsearch/> :
    <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
    </div>
  )
}

export default Browse
