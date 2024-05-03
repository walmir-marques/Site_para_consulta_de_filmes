import { useContext } from "react";
import MovieContext from "../contexts/MovieContext/MovieContext";
import { getImagePath } from "../consts";
import CardMovie from "../components/Movies/CardMovie";

function Home() {
  const { topRatedMovies } = useContext(MovieContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-primary  text-2xl font-bold">
        Filmes mais populares no Momento!
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {topRatedMovies.map((movie, index) => (
          <div key={index}>
            <CardMovie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
