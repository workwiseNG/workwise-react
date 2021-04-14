import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ textColor }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      <p
        className="nav-links font-verybold font-bold mr-10 lightAsh cursor-pointer"
        style={{ color: textColor }}
        onClick={toggleDropdown}
      >
        Products
      </p>
      {showDropDown ? (
        <div className="mt-2 absolute w-44 bg-white shadow-lg rounded-lg p-4">
          <ul className="">
            <Link to="/workwise">
              <li className="nav-links text-lightBlack text-base font-verybold font-bold mb-4">
                Workwise
              </li>
            </Link>
            <Link to="visitor-management">
              <li className="nav-links text-lightBlack font-verybold font-bold mb-4">
                Visitor management
              </li>
            </Link>
            <Link to="/meeting-room">
              <li className="nav-links text-lightBlack font-verybold font-bold mb-4">
                Meeting Rooms
              </li>
            </Link>
            <Link to="/employee-clock-in">
              <li className="nav-links text-lightBlack font-verybold font-bold">
                Employee clock-in
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Dropdown };
