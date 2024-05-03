import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex gap-10 font-bold text-xl underline">
      <Link to="/">Home</Link>
      <Link to="movies">Procurar Filme</Link>
    </div>
  );
}
export default NavBar;
