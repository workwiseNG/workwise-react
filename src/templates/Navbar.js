import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import logo from "../assets/Group.png";
import { Dropdown, DropdownTwo } from "../atoms";
import Harmburger from "./Harmburger";

const Navbar = () => {
  return (
    <div className="">
      <header className="flex items-center justify-between mt-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 md:w-28 lg:w-28" />
        </Link>

        <nav>
          <ul className="hidden md:flex items-center md:justify-between text-lightBlack">
            <Dropdown />
            {NavbarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="nav-links md:mr-4 lg:mr-10 font-verybold font-bold lightAsh md:flex md:justify-between"
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
            <DropdownTwo />
          </ul>
        </nav>
        <ul className="hidden md:flex md:items-center lg:block">
          <Link to="/login">
            <button className="bg-white focus:outline-none text-primary border border-primary font-medium text-xs md:py-2 md:px-8 lg:py-4 lg:px-14 font-verybold mr-4 rounded-md">
              Log in
            </button>
          </Link>
          <Link to="/tryforfree">
            <button className="bg-primary outline-none lg:mt-4 text-white text-xs font-medium md:py-2 md:px-4 lg:py-4 lg:px-10 rounded-md">
              Try for free
            </button>
          </Link>
        </ul>

        <div className="md:hidden">
          <Harmburger />
        </div>
      </header>
    </div>
  );
};
export default Navbar;
