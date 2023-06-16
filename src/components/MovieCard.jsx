import React from 'react'
import MovieNotFound from "../assets/movie Not Found.png"
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


export const MovieCard = ( {movie} ) => {
  const { id, title, overview , poster_path } = movie;

  const posterPath = poster_path ? `http://image.tmdb.org/t/p/w500//${poster_path}` : MovieNotFound
  return (
   
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 medium:max-w-lg medium:m-auto">
    <Link to={`/movie/${id}`} >
        <img className="rounded-lg h-96 min-w-full" src={posterPath} />
    </Link>
    <div className="p-5">
        <Link to={`/movie/${id}`} >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
  )
    
}
