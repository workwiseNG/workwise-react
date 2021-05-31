import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import Harmburger from "./Harmburger";
import whiteLogo from "../assets/whitelogo.svg";
import { Dropdown, DropdownTwo } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";

const NavbarThree = ({ buttonText, path, text, className, textTwo }) => {
  return (
    <section className="bg-primary pb-16 pt-8 ">
      <SectionWrapper>
        <header className="flex items-center justify-between">
          <Link to="/">
            <img src={whiteLogo} alt="logo" className="w-32 md:w-28 lg:w-28" />
          </Link>

          <nav>
            <ul className="hidden md:flex items-center text-lightBlack">
              <Dropdown textColor="#ffffff" />
              {NavbarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="nav-links md:mr-4 lg:mr-10 font-verybold font-bold text-white"
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
              <DropdownTwo textColor="#ffffff" />
            </ul>
          </nav>

          <ul className="hidden md:flex md:items-center lg:block text-white">
            <Link to="/login">
              <button class=" focus:outline-none text-white border border-white bg-primary font-extrabold text-xs  md:py-2 md:px-8 lg:py-4 lg:px-14 font-verybold mr-4 rounded-md">
                Log in
              </button>
            </Link>
            <Link to="/tryforfree">
              <button class="bg-white focus:outline-none text-primary nav-links font-verybold font-semibold md:py-2 md:px-4 lg:py-4 lg:px-10 rounded-md">
                Try for free
              </button>
            </Link>
          </ul>
          <div className="md:hidden">
            <Harmburger color="text-white" className="ml-12 lg:ml-0" />
          </div>
        </header>
        <div className="lg:m-auto w-11/12">
          <p
            className={`text-center text-2xl lg:text-5xl text-white font-thin font-bold leading-snug pt-12 pb-4 ${className}`}
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
