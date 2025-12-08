import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { Filters } from "../Filters";

export const NavBar = () => {
  return (
    <nav className="top-0 w-full fixed p-4 flex justify-between items-center bg-transparent border-b border-white/20 backdrop-blur-md z-50">
      <ul className="flex gap-8">
        <li className="font-bold text-lg hover:scale-105 transition-all">
          <NavLink to="/" className="hover:underline">
            Rick and Morty
          </NavLink>
        </li>
        <li className="font-medium text-lg hover:scale-105 transition-all">
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
        </li>
      </ul>
      <footer className="flex gap-4 items-center justify-between">
        <div className="min-w-[150px]">
          <Filters />
        </div>
        <div className="min-w-[250px]">
          <SearchBar />
        </div>
      </footer>
    </nav>
  );
};
