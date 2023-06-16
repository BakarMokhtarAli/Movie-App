import { Route, Routes } from "react-router-dom"
import { MovieList, MovieDeail, Search, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="now_playing" />} />
        <Route path="popular" element={<MovieList apiPath="movie/popular" title="popular" />} />
        <Route path="Upcoming" element={<MovieList apiPath="movie/upcoming"
        title="upcoming" />} />
        <Route path="Top_rated" element={<MovieList apiPath="movie/top_rated" title="Top_Rated" />} />
        <Route path="/movie/:id" element={<MovieDeail />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}
