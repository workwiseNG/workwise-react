import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Harmburger = ({ color }) => {
  const [open, setOpen] = useState(false);
  const showSidebar = () => setOpen(!open);
  return (
    <div>
      <Link to="#" className="ml-8 text-xl flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="2rem"
          onClick={showSidebar}
          className={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Link>
      {open ? (
        <div className="">
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-1"
              fill="none"
              width="4rem"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={!showSidebar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
          <Sidebar open={open} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Harmburger;
