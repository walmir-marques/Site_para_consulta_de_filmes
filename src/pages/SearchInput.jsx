import { useContext } from "react";
import MovieContext from "../contexts/MovieContext/MovieContext";

function SearchInput() {
  const { searchMovie, setSearchMovie } = useContext(MovieContext);
  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Digite o nome do filme"
        value={searchMovie}
        onChange={(e) => {
          setSearchMovie(e.target.value);
        }}
        className="p-4 outline-none text-white font-bold text-xl rounded-md border border-white"
      />
    </div>
  );
}
export default SearchInput;
