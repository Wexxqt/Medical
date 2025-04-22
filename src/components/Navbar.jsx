import { useState, useContext } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { ThemeToggle } from "./";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar" role="navigation" aria-label="Main Navigation">
      <a href="#home" aria-label="E-Catsulta Home">
        <img src={logo} alt="E-Catsulta logo" className="w-[250px] h-[100px]" loading="eager" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] transition-colors duration-300 ${
              active === nav.title 
                ? (isDarkMode ? "text-white" : "text-light-text")
                : (isDarkMode ? "text-dimWhite hover:text-white" : "text-light-dim-text hover:text-light-text")
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`} aria-current={active === nav.title ? "page" : undefined}>
              {nav.title}
            </a>
          </li>
        ))}
        <li className="ml-10">
          <ThemeToggle />
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="mr-4">
          <ThemeToggle />
        </div>

        <button
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        <div
          id="mobile-menu"
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50 shadow-lg`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] w-full ${
                  active === nav.title
                    ? (isDarkMode ? "text-white" : "text-light-text")
                    : (isDarkMode ? "text-dimWhite" : "text-light-dim-text")
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`} className="block py-2 w-full" aria-current={active === nav.title ? "page" : undefined}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
