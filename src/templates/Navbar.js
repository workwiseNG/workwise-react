import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavData";
import logo from "../assets/Group.png";
import { Dropdown } from "../atoms";
import Harmburger from "./Harmburger";

const Navbar = () => {
  return (
    <div className="">
      <header className="flex items-center justify-between mt-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 lg:w-28" />
        </Link>

        <nav>
          <ul className="hidden md:flex items-center text-lightBlack">
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

        <div className="md:hidden">
          <Harmburger />
        </div>
      </header>
    </div>
  );
};
export default Navbar;
