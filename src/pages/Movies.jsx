import { useContext } from "react";
import SearchInput from "./SearchInput";
import MovieContext from "../contexts/MovieContext/MovieContext";
import CardMovie from "../components/Movies/CardMovie";

function Movies() {
  const { moviesByName } = useContext(MovieContext);
  return (
    <div>
      <SearchInput />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {moviesByName.map((movie, index) => (
          <div key={index}>
            <CardMovie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Movies;
