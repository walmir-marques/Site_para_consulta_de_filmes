import AppLogo from "./AppLogo";
import NavBar from "./NavBar";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <div className="flex justify-between max-h-16">
      <AppLogo />
      <NavBar />
      <ThemeController />
    </div>
  );
};
export default Header;
