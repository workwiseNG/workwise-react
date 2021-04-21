import { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const showSubnav = () => {
    if (item.subNav) setDropDown(!dropDown);
  };
  return (
    <div>
      <>
        {item.subNav ? (
          <div
            to={item.path}
            className="flex text-white font-body text-base font-semibold items-center p-5 list-none h-14 mt-16 cursor-pointer"
            onClick={showSubnav}
          >
            <div>
              <span className="ml-4 mr-2">{item.title}</span>
            </div>
            <div>
              {item.subNav && dropDown
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </div>
        ) : (
          <Link
            to={item.path}
            className="flex justify-between text-white hover:text-black text-base font-body font-semibold items-center p-5 list-none h-14 cursor-pointer"
            onClick={showSubnav}
          >
            <div>
              <span className="ml-4">{item.title}</span>
            </div>
            <div>
              {item.subNav && dropDown
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </Link>
        )}

        {dropDown &&
          item.subNav.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className="bg-primary h-16 pl-12 flex items-center font-body text-sm font-normal text-white"
              >
                <span className="ml-2">{item.title}</span>
              </Link>
            );
          })}
      </>
    </div>
  );
};

export default SubMenu;
