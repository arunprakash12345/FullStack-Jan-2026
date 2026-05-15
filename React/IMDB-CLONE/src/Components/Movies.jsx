import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    try {
      setLoader(true);
      const url =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=1";
      axios.get(url).then((response) => {
        const movieData = response?.data?.results?.slice(0, 5);
        setMovies(movieData);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <div className="flex justify-evenly flex-wrap items-center">
            {movies?.length >> 0 &&
              movies.map((movie, index) => {
                return (
                  <div key={index}>
                    <div
                      className="h-[30vh] w-[200px] rounded-xl bg-cover bg-center flex items-end"
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                      }}
                    >
                      <div className="text-white w-full text-center text-2xl p-4 bg-black/50">
                        {movie.title}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
