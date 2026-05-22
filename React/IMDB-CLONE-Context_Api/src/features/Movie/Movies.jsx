import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../Components/Spinner";
import axios from "axios";
import Pagination from "../../Components/Pagination";
import MovieList from "./MovieList";
import { MovieContext } from "../../context/MovieContextWrapper";
import { LoaderContext } from "../../context/LoaderContextWrapper";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const { watchList, checkIfMoviePresentInWatchList } =
    useContext(MovieContext);
  const { loader, setLoader } = useContext(LoaderContext);

  useEffect(() => {
    try {
      setLoader(true);
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=${pageNo}`;
      axios.get(url).then((response) => {
        const movieData = response?.data?.results?.slice(0, 5);
        setMovies(movieData);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, [pageNo]);

  const handlePrev = () => {
    setPageNo((prev) => {
      return prev == 1 ? 1 : prev - 1;
    });
  };
  const handleNext = () => {
    setPageNo((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <MovieList
            movies={movies}
            checkIfMoviePresentInWatchList={checkIfMoviePresentInWatchList}
          />
          <Pagination
            pageNo={pageNo}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      )}
    </>
  );
};

export default Movies;
