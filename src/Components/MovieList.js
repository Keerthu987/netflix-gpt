import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    // console.log("movies")
    // console.log(movies)
    return (
        <div className='px-6 '>
            <h1 className='text-3xl py-3 text-white'>{title}</h1>

            <div className='flex overflow-x-auto whitespace-nowrap no-scrollbar'>
                <div className='flex'>
                    { movies && movies.map(movie =>
                        <MovieCard key={movie?.id} posterPath={movie?.poster_path} />

                    )}
                </div>
            </div>

        </div>
    )
}

export default MovieList
