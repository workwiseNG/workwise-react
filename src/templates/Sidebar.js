import { SidebarData } from "../data/NavbarData";
import SubMenu from "../templates/SubMenu";

const Sidebar = ({ open, showSidebar }) => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        fill="none"
        width="2rem"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={showSidebar}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div
        className={` bg-primary h-full mt-14 fixed top-0 z-40 ${
          open ? "w-3/4" : "w-0"
        }`}
        style={{
          right: open ? "0" : "100%",
          transition: open && "all 1s ease-in-out",
        }}
      >
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
// ${open ? "w-3/4" : "w-0"}
export default Sidebar;
