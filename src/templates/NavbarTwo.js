import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import Sidebar from "./Sidebar";
import whiteLogo from "../assets/whitelogo.svg";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Dropdown } from "../atoms";

const NavbarTwo = ({ text, element }) => {
  return (
    <section className="bg-primary mx-auto lg:pl-8 pl-4 pt-4 pb-12 pr-4">
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
        </div>
        <p className="text-center text-5xl text-white font-thin py-24">
          {text}
        </p>
        <p className="text-white text-center text-sm -mt-14 pb-4">{element}</p>
      </SectionWrapper>
    </section>
  );
};

export default NavbarTwo;
