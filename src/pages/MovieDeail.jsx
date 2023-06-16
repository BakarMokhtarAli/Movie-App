import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import MovieNotFound from "../assets/movie Not Found.png";
import LoadingGif from "../assets/loading-gif.gif";
import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";

export const MovieDeail = () => {
  const [movie, setMovie] = useState({});
  const posterPath = `http://image.tmdb.org/t/p/w500//${movie.poster_path}`;
  useTitle(movie.title);
  const { loading } = useFetch();
  const params = useParams();
  useEffect(() => {
    async function fethMovie() {
      const request = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=21bd90924fe6da89c75ce2f28b1eaca5`
      );
      const response = await request.json();
      setMovie(response);
    }
    fethMovie();
  }, [params.id]);

  return (
    <main>
      {loading ? (
        <div className="w-28 mx-auto my-10">
          <img src={LoadingGif} alt="loading State..." />
        </div>
      ) : (
        <>
          <div className="w-full m-auto flex justify-center flex-wrap flex-col md:flex-row dark:text-white">
            <div className="basis-1/2 m-auto max-h-1/2">
              <img
                className="rounded-sm"
                src={posterPath ? posterPath : MovieNotFound}
                alt={movie.title}
              />
            </div>
            <div className="basis-1/2">
              <h2
                className="text-2xl text-gray-800 dark:textwhite ml-2 mb-4
              mt-8 font-bold dark:text-white"
              >
                {movie.title}
              </h2>
              <p className="ml-2 mb-4 text-lg text-black dark:text-white">
                {movie.overview}
              </p>
              <p className="flex felx-row flex-wrap gap-5 mb-4">
                {movie.genres
                  ? movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="py-1 px-2 text-xl w-fit dark:text-white rounded-md border border-gray-400 inline"
                      >
                        {genre.name}
                      </span>
                    ))
                  : ""}
              </p>
              <p className="ml-2 mb-4 text-lg text-black dark:text-white">
                <span className="font-bold">Status:</span> {movie.status}
              </p>
              <p className="ml-2 mb-4 text-lg text-black dark:text-white">
                <span className="font-bold">Date:</span> {movie.release_date}
              </p>
              <p className="ml-2 mb-4 text-lg text-black dark:text-white">
                <span className="font-bold">Revanue:</span> {movie.revenue}
              </p>

              <div className="flex items-center ml-2 mb-4">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {movie.vote_average}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {movie.vote_count}
                </span>
              </div>

              <p className="ml-2 mb-4 text-lg text-black dark:text-white bi bi-star">
                <a
                  className="font-bold"
                  href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                  target="_blank"
                >
                  Imdb:
                </a>
                {movie.imdb_id}
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
