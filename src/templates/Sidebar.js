import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../data/NavbarData";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu__bars">
          <BiMenuAltRight
            onClick={showSidebar}
            className="menu text-4xl lg:hidden"
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav__menu active" : "nav__menu"}>
        <ul className="nav__menu__items" onClick={showSidebar}>
          <li className="navbar__toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose className="menu" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
