import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBg = ({ movieId }) => {
    const trailerVideo=useSelector(store=>store.movies?.trailer)
    useMovieTrailer(movieId);
    return (
        <div>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBg
