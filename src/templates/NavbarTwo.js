import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import whiteLogo from "../assets/whitelogo.svg";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Dropdown, DropdownTwo } from "../atoms";
import Harmburger from "./Harmburger";

const NavbarTwo = ({ text, element }) => {
  return (
    <section className="bg-primary mx-auto lg:pl-8 pl-4 pt-4 pb-12 pr-4">
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
              <button class=" focus:outline-none text-white border border-white bg-primary font-extrabold text-xs md:py-2 md:px-8 lg:py-4 lg:px-14 font-verybold mr-4 rounded-md">
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
            <Harmburger color="text-white" />
          </div>
        </header>
        <p className="text-center text-2xl lg:text-5xl text-white font-thin py-16 lg:py-24">
          {text}
        </p>
        <p className="text-white text-center text-sm -mt-14 pb-4">{element}</p>
      </SectionWrapper>
    </section>
  );
};

export default NavbarTwo;
