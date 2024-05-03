import { dateConvert, getImagePath } from "../../consts";

function MovieDetails({ movie }) {
  return (
    <div className=" flex flex-col lg:flex-row gap-5">
      <img src={getImagePath(movie.poster_path)} width={500} />
      <div className="flex flex-col justify-around p-4">
        <div>
          <h1 className="text-4xl font-bold text-primary text-center">
            {movie.title}
          </h1>
          <p className="text-center text-secondary mt-4">{movie.overview}</p>
        </div>
        <div>
          <div className="flex gap-2 items-center py-2">
            <h2 className="font-bold text-2xl text-primary">Orçamento: </h2>
            <h3 className="text-2xl text-secondary font-bold">
              {movie.budget
                ? movie.budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "Valor não disponível"}
            </h3>
          </div>
          <div className="flex gap-2 items-center py-2">
            <h2 className="font-bold text-2xl text-primary">
              Valor Arrecadado:{" "}
            </h2>
            <h3 className="text-2xl text-secondary font-bold">
              {movie.revenue
                ? movie.revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "Valor não disponível"}
            </h3>
          </div>
          <div className="flex gap-2 items-center py-2">
            <h2 className="font-bold text-2xl text-primary">Nota: </h2>
            <h3 className="text-2xl text-secondary font-bold">
              {movie.vote_average}
            </h3>
          </div>
          <div className="flex gap-2 items-center py-2">
            <h2 className="font-bold text-2xl text-primary">
              Quantidade de Votos:{" "}
            </h2>
            <h3 className="text-2xl text-secondary font-bold">
              {movie.vote_count}
            </h3>
          </div>
          <div className="flex gap-2 items-center py-2">
            <h2 className="font-bold text-2xl text-primary">
              Data de Lançamento:{" "}
            </h2>
            <h3 className="text-2xl text-secondary font-bold">
              {dateConvert(movie.release_date)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
