import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Harmburger = (ref, { color, className }) => {
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       alert("You clicked outside of me!");
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [ref]);
  const [open, setOpen] = useState(false);
  const showSidebar = () => setOpen(!open);
  return (
    <div className="flex justify-start items-center">
      <Link
        to="#"
        className="ml-8 text-xl flex justify-start items-center"
        style={{ display: open ? "none" : "flex" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="2rem"
          onClick={showSidebar}
          className=""
        >
          {/* display: open ? "hidden" : "flex" */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Link>

      {open && (
        <div className="">
          <Sidebar open={open} showSidebar={showSidebar} />
        </div>
      )}
    </div>
  );
};

export default Harmburger;
