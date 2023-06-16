import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import LoadingGif from "../assets/loading-gif.gif";

export const Search = ({ apiPath }) => {
  const [search] = useSearchParams();
  const queryTerm = search.get("q");

  const { movies, loading } = useFetch(apiPath, queryTerm);
  const { title } = useTitle(
    queryTerm
      ? `Serach Results For ${queryTerm}`
      : `No Result Found For ${queryTerm}`
  );

  return (
    <main>
      {loading ? (
        <div className="w-28 mx-auto my-10">
          <img src={LoadingGif} alt="loading State..." />
        </div>
      ) : (
        <>
          <div className="m-5 text-3xl dark:text-white">
            {movies.length === 0 ? (
              <p>No Result Found For "{queryTerm}"</p>
            ) : (
              <p>Results For "{queryTerm}"</p>
            )}
          </div>
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
