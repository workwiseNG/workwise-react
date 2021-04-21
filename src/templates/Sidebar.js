import { SidebarData } from "../data/NavbarData";
import SubMenu from "../templates/SubMenu";

const Sidebar = ({ open }) => {
  return (
    <div>
      <div
        className="w-1/2 bg-primary h-full justify-center fixed top-0 z-40"
        style={{ left: open ? "0" : "-100%" }}
      >
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
