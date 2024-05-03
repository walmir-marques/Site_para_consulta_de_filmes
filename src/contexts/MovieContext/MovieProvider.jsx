import { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
import { baseUrl, apiKey } from "../../consts";

// eslint-disable-next-line react/prop-types
const MovieProvider = ({ children }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [moviesByName, setMoviesByName] = useState([]);
  const [SearchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getMovieByName(SearchMovie);
  }, [SearchMovie]);

  const getPopularMovies = async () => {
    const result = await fetch(
      `${baseUrl}popular?api_key=${apiKey}&language=pt-BR`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err.message);
      });
    setTopRatedMovies(result.results);
  };

  const getMovieById = async (id) => {
    const result = await fetch(
      `${baseUrl + id}?api_key=${apiKey}&language=pt-BR`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err.message);
      });
    setMovieInfo(result);
  };

  const getMovieByName = async (name) => {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=pt-BR&api_key=${apiKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err.message);
      });
    setMoviesByName(result.results);
  };

  return (
    <MovieContext.Provider
      value={{
        topRatedMovies,
        setTopRatedMovies,
        getMovieById,
        movieInfo,
        SearchMovie,
        setSearchMovie,
        moviesByName,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
