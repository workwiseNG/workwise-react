import { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import logo from "../assets/Group.png";
import { Dropdown } from "../atoms";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showSidebar = () => setOpen(!open);
  return (
    <div className="">
      <header className="lg:flex lg:items-center lg:justify-between mt-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 lg:w-28" />
        </Link>

        <nav>
          <ul className="hidden lg:flex items-center text-lightBlack">
            <Dropdown />
            {NavbarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="nav-links mr-10 font-verybold font-bold lightAsh"
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="hidden lg:block">
          <Link to="/login">
            <button class="bg-white focus:outline-none text-primary border border-primary font-medium text-xs py-4 px-14 font-verybold mr-4 rounded-md">
              Log in
            </button>
          </Link>
          <Link to="/tryforfree">
            <button class="bg-primary outline-none mt-4 text-white text-xs font-medium py-4 px-10 rounded-md">
              Try for free
            </button>
          </Link>
        </ul>
      </header>
      <div className="lg:hidden -mt-10 flex justify-end">
        <Link to="#" className="ml-8 text-xl flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="2rem"
            onClick={showSidebar}
            className="text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Link>
        {open ? (
          <div className="">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-1"
              fill="none"
              width="4rem"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={!showSidebar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
            <Sidebar open={open} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
