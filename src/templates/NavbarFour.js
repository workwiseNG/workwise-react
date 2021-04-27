import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import Harmburger from "./Harmburger";
import whiteLogo from "../assets/whitelogo.svg";
import lens from "../assets/lens.svg";
import { Dropdown } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";

const NavbarFour = ({ text, className, textTwo }) => {
  return (
    <section className="bg-primary pb-16 pt-8 ">
      <SectionWrapper>
        <header className="flex items-center justify-between">
          <Link to="/">
            <img src={whiteLogo} alt="logo" className="w-32 lg:w-28" />
          </Link>

          <nav>
            <ul className="hidden lg:flex items-center text-lightBlack">
              <Dropdown textColor="#ffffff" />
              {NavbarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="nav-links mr-10 font-verybold font-bold text-white"
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ul className="hidden lg:block text-white">
            <Link to="/login">
              <button class=" focus:outline-none text-white border border-white bg-primary font-extrabold text-sm py-4 px-14 font-verybold mr-4 rounded-md">
                Log in
              </button>
            </Link>
            <Link to="/tryforfree">
              <button class="bg-white focus:outline-none text-primary nav-links font-verybold font-semibold py-4 px-8 rounded-md">
                Try for free
              </button>
            </Link>
          </ul>
          <div className="lg:hidden">
            <Harmburger color="text-white" />
          </div>
        </header>
        <div className="lg:m-auto w-11/12">
          <p
            className={`text-center text-5xl text-white font-thin font-bold leading-snug pt-12 pb-4 ${className}`}
          >
            {text}
          </p>
          <p className="text-center text-white text-sm font-extralight pb-8">
            {textTwo}
          </p>
          <div className="text-center w-full relative">
            <i>
              <img
                src={lens}
                alt="lens"
                className="absolute ml-4 md:ml-24 lg:ml-72 w-6 mt-10"
              />
            </i>
            <input
              type="text"
              placeholder="Search for articles, resources, etc..."
              className="p-2 pl-12 lg:pl-16 text-sm rounded-lg w-full md:w-3/4 lg:w-1/2 mt-8"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default NavbarFour;
