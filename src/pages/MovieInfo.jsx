import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../contexts/MovieContext/MovieContext";
import MovieDetails from "../components/Movies/MovieDetails";

const MovieInfo = () => {
  const { id } = useParams();
  const { movieInfo, getMovieById } = useContext(MovieContext);

  useEffect(() => {
    getMovieById(id);
    console.log(movieInfo);
  }, [id]);

  return (
    <div>
      {movieInfo ? (
        <MovieDetails movie={movieInfo} />
      ) : (
        <h1>Carregando ....</h1>
      )}
    </div>
  );
};
export default MovieInfo;
