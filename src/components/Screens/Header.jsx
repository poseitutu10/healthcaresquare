import React, { useContext, useState } from "react";
import logo from "../../../public/mainlogo.svg";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { ContextProvider } from "../../utils/Context";

const Header = () => {
  const [isPop, setIsPop] = useState(false);
  const { active, handleActive } = useContext(ContextProvider);
  return (
    <>
      <div className="bg-white flex justify-between items-center px-10 md:px-14 py-3 md:py-5 text-sm md:text-base shadow-md xl:px-40 sticky top-0">
        <div className="logo">
          <img src={logo} alt="logo" className="max-w-28" />
        </div>
        <nav className="space-x-5 hidden md:block text-sm md:text-base">
          <Link
            to="/"
            className={`${
              active === 1
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            onClick={() => handleActive(1)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              active === 2
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            onClick={() => handleActive(2)}
          >
            About
          </Link>
          <Link
            to="#"
            className={`${
              active === 3
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(3)}
          >
            Services
          </Link>
          <Link
            to="#"
            className={`${
              active === 4
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(4)}
          >
            Pricing
          </Link>
          <Link to="#" className="border border-primary px-4 py-2 text-primary">
            Pages
          </Link>
          <Link
            to="#"
            className={`${
              active === 6
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(6)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`${
              active === 7
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            onClick={() => handleActive(7)}
          >
            Contact
          </Link>
          <Link
            to="#"
            className={`${
              active === 8
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(8)}
          >
            Cart
          </Link>
          <Link to="#" className="text-white bg-primary py-2 px-3">
            Get started
          </Link>
        </nav>
        <IoMenuOutline
          size={22}
          className="block md:hidden cursor-pointer"
          onClick={() => setIsPop((prev) => !prev)}
        />
      </div>
      <div
        className={`dropmenu ${
          isPop ? "block" : "hidden"
        } w-full h-[50vh] flex justify-center shadow-md`}
      >
        <div className="navigation w-1/3 h-full flex flex-col items-center justify-center gap-3 md:text-base">
          <Link
            to="/"
            className={` text-sm md:text-base ${
              active === 1
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            onClick={() => handleActive(1)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm md:text-base ${
              active === 2
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            onClick={() => handleActive(2)}
          >
            About
          </Link>
          <Link
            to="#"
            className={`text-sm md:text-base ${
              active === 3
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(3)}
          >
            Services
          </Link>
          <Link
            to="#"
            className={`text-sm md:text-base ${
              active === 4
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(4)}
          >
            Pricing
          </Link>
          <Link to="#" className="text-sm border border-primary px-3 py-2 text-primary">
            Pages
          </Link>
          <Link
            to="#"
            className={`text-sm md:text-base md:text-base ${
              active === 6
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            // onClick={() => handleActive(6)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`text-sm md:text-base ${
              active === 7
                ? "text-white bg-primary py-2 px-3 font-semibold"
                : ""
            }`}
            onClick={() => handleActive(7)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
