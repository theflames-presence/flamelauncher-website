import { NavLink } from "react-router-dom";
import logo from "/src/assets/fmcl.png";
import DarkToggle from "./DarkToggle";
import Popup from "./Popup";

const Navbar = () => {
  return (
    <div>
      <header className="text-gfont body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-font mb-4 md:mb-0">
            <img className="h-14 rounded-full" src={logo} alt={logo} />
            <span className="ml-3 text-2xl font-bold">
              Flame{" "}
              <span className="text-gprimary dark:text-shadow-xl">Launcher</span>
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-9">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "list-none font-bold m-4 text-font border-b-2 border-primary scale-[1.1] transition-all"
                  : "list-none font-bold m-4 hover:text-font hover:border-b-2 hover:border-primary hover:scale-[1.1] transition-all"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/versions"
              className={({ isActive }) =>
                isActive
                  ? "list-none font-bold m-4 text-font border-b-2 border-primary scale-[1.1] transition-all"
                  : "list-none font-bold m-4 hover:text-font hover:border-b-2 hover:border-primary hover:scale-[1.1] transition-all"
              }
            >
              Versions
            </NavLink>
          </nav>
          <DarkToggle />
          <Popup />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
