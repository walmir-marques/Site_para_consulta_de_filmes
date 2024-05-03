import { Link } from "react-router-dom";
import { getImagePath } from "../../consts";

function CardMovie({ movie }) {
  return (
    <div className="w-80 h-96 group border-4 border-white">
      <div className="relative overflow-hidden">
        <img
          src={getImagePath(getImagePath(movie.poster_path))}
          alt={movie.title}
          className="h-[370px] w-full  group-hover:opacity-40 group-hover:blur-sm"
        />
        <div className="absolute h-full w-full flex items-center justify-around -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300  ">
          <div className="flex flex-col gap-20 items-center">
            <h1 className="text-2xl font-bold text-center">{movie.title}</h1>
            <Link
              to={`/movies/${movie.id}`}
              className="px-10 py-3 bg-neutral text-white text-xl rounded-md"
            >
              + Infos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardMovie;
