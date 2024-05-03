import { Link } from "react-router-dom";

function AppLogo() {
  return (
    <Link to="/" className="text-2xl font-bold text-primary hidden md:block">
      Movie <span className="text-secondary">List</span>
    </Link>
  );
}

export default AppLogo;
