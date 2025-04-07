"use client";

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DarkMode from "../../assets/darkMode.svg";
import LightMode from "../../assets/lightMode.svg";

const Header = () => {
  const activeClass = "text-blue-700 ";
  const inActiveClass = "text-gray-700 dark:text-white";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode !== null ? JSON.parse(savedMode) : true;
    } catch (error) {
      console.error("Failed to parse darkMode from localStorage:", error);
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));

      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      console.error("Failed to save darkMode to localStorage:", error);
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();

    return navigate(`/search?q=${queryTerm}`);
  };

  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev);
  // };

  return (
    <header>
      <nav className=" border-gray- max-[1400px] m-auto  dark:bg-gray-900 p-4 dark:text-white">
        <div className="flex justify-between flex-wrap">
          <Link to="/" className="flex items-center gap-3 md:mb-2">
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Forge
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            className="hidden"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>

          <button
            className="w-[18px] h-[18px] cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <div className="border border-solid rounded-md p-1 bg-slate-100">
                <img src={DarkMode} alt="DarkMode" />
              </div>
            ) : (
              <div className="border border-solid rounded-md p-1 bg-slate-100">
                <img src={LightMode} alt="DarkMode" />
              </div>
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? "hidden" : "block"
            } md:flex md:order-2  md:w-full `}
          >
            <ul className="flex gap-6 text-[18px] md:flex-col	 md:w-full md:items-center dark:text-white ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/popular"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/top"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 md:order-1  md:w-full md:mt-2 ">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative md:w-full ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <span className="sr-only pl-3 block">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  className="border p-[2px] border-gray-600 rounded md:w-full"
                  id="search-navbar"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
