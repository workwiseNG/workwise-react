import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import Sidebar from "./Sidebar";
import whiteLogo from "../assets/whitelogo.svg";
import { Dropdown } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";

const NavbarThree = ({ buttonText, path, text, className, textTwo }) => {
  return (
    <section className="bg-primary pb-16 pt-8 ">
      <SectionWrapper>
        <header className="lg:flex lg:items-center lg:justify-between">
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
        </header>
        <div className="lg:m-auto w-11/12">
          <div className="-mt-14 flex justify-end">
            <Sidebar />
          </div>
          <p
            className={`text-center text-5xl text-white font-thin font-bold leading-snug pt-12 pb-4 ${className}`}
          >
            {text}
          </p>
          <p className="text-center text-white text-sm font-extralight pb-8">
            {textTwo}
          </p>
          <div className="text-center">
            <Link to={path}>
              <button class="bg-white focus:outline-none text-primary nav-links font-verybold font-semibold py-4 px-10 text-xs rounded-md">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default NavbarThree;
