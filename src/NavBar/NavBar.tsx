import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { Filters } from "../Filters";
import { useState } from "react";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="top-0 w-full fixed bg-transparent border-b border-white/20 backdrop-blur-md z-50">
      {/* Desktop & Mobile Header */}
      <div className="p-4 flex justify-between items-center">
        {/* Logo & About - Always Visible */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="font-bold text-lg hover:scale-105 transition-all">
            <NavLink to="/" className="hover:underline">
              Rick and Morty
            </NavLink>
          </div>
          <div className="font-medium text-lg hover:scale-105 transition-all">
            <NavLink to="/about" className="hover:underline">
              About
            </NavLink>
          </div>
        </div>

        {/* Desktop Search & Filters */}
        <div className="hidden lg:flex gap-4 items-center">
          <div className="min-w-[150px]">
            <Filters />
          </div>
          <div className="min-w-[250px]">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-white/20 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-4">
          {/* Mobile Search and Filters Only */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Search Characters
              </label>
              <SearchBar />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Filter Options
              </label>
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
