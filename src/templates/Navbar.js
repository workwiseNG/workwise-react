import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="object-cover flex items-center justify-between ">
      <div className="lg:flex lg:items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="object-cover mr-24" />
        </Link>
        <section className="hidden lg:block">
          <ul className="flex items-center">
            <Link to="products">
              <li className="text-black text-sm font-bold mr-12">Products</li>
            </Link>
            <Link to="hardware">
              <li className="text-black text-sm font-bold mr-12">Hardware</li>
            </Link>
            <Link to="learn">
              <li className="text-black text-sm font-bold mr-12">Learn</li>
            </Link>
            <Link to="pricing">
              <li className="text-black text-sm font-bold mr-12">Pricing</li>
            </Link>
            <Link to="contactus">
              <li className="text-black text-sm font-bold mr-20">Contact Us</li>
            </Link>
            <Link to="/login">
              <button class="bg-white text-primary border border-primary text-xs py-2 px-12 mr-4 rounded">
                Log in
              </button>
            </Link>
            <button class="bg-primary text-white text-xs py-2 px-12 rounded">
              Try for free
            </button>
          </ul>

          <div></div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
