import { useState } from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/dropdown";

const DropdownTwo = ({ textColor }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      <p
        className="nav-links font-verybold font-bold md:mr-4 lg:mr-10 lightAsh cursor-pointer"
        style={{ color: textColor }}
        onClick={toggleDropdown}
      >
        Resources
      </p>
      {showDropDown && (
        <div className="mt-2 absolute w-44 bg-white shadow-lg rounded-lg p-4">
          <ul className="">
            {resources.map(({ title, path }) => {
              return (
                <Link to={path} key={title}>
                  <li className="nav-links text-lightBlack font-verybold font-bold mb-4">
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export { DropdownTwo };
