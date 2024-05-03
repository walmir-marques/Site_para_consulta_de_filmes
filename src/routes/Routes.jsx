import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieInfo from "../pages/MovieInfo";
import Movies from "../pages/Movies";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieInfo />} />
    </Routes>
  );
}
export default AppRoutes;
