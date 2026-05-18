import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import Pagination from "./Pagination";
import MovieList from "./MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    setWatchList(() => {
      if (localStorage.getItem("ImdbWatchList")) {
        return JSON.parse(localStorage.getItem("ImdbWatchList"));
      }
    });
  }, []);

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

  const checkIfMoviePresentInWatchList = (movie) => {
    return watchList.find((m) => m?.id === movie?.id) ? true : false;
  };

  const addToWatchList = (movie) => {
    setWatchList((prev) => {
      const updatedList = [...prev, movie];
      localStorage.setItem("ImdbWatchList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const removeFromWatchList = (movie) => {
    setWatchList((prev) => {
      const filteredList = prev.filter((m) => m?.id != movie?.id);
      localStorage.setItem("ImdbWatchList", JSON.stringify(filteredList));
      return filteredList;
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
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
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
