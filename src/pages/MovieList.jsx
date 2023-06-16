import React, { useEffect, useState } from "react";
import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import LoadingGif from "../assets/loading-gif.gif";

export const MovieList = ({ apiPath, title }) => {
  const { movies, loading } = useFetch(apiPath);
  useTitle(title);
  return (
    <main>
      {loading ? (
        <div className="w-28 mx-auto my-10">
          <img src={LoadingGif} alt="loading State..." />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl m-auto">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};
