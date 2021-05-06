import { SidebarData } from "../data/NavbarData";
import SubMenu from "../templates/SubMenu";

const Sidebar = ({ open, showSidebar }) => {
  return (
    <div className="" style={{ transition: "350ms" }}>
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
        className="w-3/4 bg-primary h-full mt-14 fixed top-0 z-40"
        style={{ right: open ? "0" : "-100%" }}
      >
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
