import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constant.js";
import myLogo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  

  return (
    <nav
      className={`${styles.paddingX} bg-primary  z-20 py-2 w-full flex items-center`}
    > 
  
      <div className="flex justify-between items-center w-full">
        <div className="logoName flex items-center">
          <Link
            to="/"
            onClick={() => {
              setActive("");
            }}
            className="font-bold cursor-pointer inline "
          >
            <img src={myLogo} className="w-16 h-14" />
          </Link>
          <span className="font-bold -mx-3 text-xl bg-gradient-to-r from-green-500  to-cyan bg-clip-text text-transparent">arun Kumar</span>

        </div>

        <div className="hidden sm:flex sm:items-center lg:gap-24 md:gap-20">
          <ul className="flex gap-10 lg:gap-24">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-400"
                  } list-none font-bold text-2xl`}
                >
                  <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="menubtn sm:hidden w-10 h-10  top-3 right-3 z-50">
          <img
            src={toggleMenu ? close : menu}
            className="cursor-pointer mt-3"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>

        <div
          className={`${
            !toggleMenu ? "hidden" : "flex"
          } flex-col absolute top-14 right-3 bg-gray-800 p-4 rounded-lg z-40 sm:hidden shadow-sm shadow-slate-100`}
        >
          <ul className="relative bg-inherit">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-400"
                  } list-none font-bold mb-2 text-2xl bg-inherit`}
                >
                  <a href={`#${link.id}`} className="bg-inherit" onClick={() => setActive(link.title)}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
