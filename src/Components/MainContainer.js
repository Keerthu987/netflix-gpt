import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.playing)
    if(movies==null) return;
    const mainMovie=movies[0];
    // console.log(mainMovie)
    const {title,overview,id}=mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBg movieId={id}/>
    </div>
  )
}

export default MainContainer
