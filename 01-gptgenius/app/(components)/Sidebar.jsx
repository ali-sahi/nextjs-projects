import Navlinks from "./Navlinks";
import MemberProfile from "./MemberProfile";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="bg-base-300 px-4 w-80 py-12 grid grid-rows-[auto,1fr,auto] min-h-screen">
      {/* 1st Row */}
      <SidebarHeader />
      {/* 2nd Row */}
      <Navlinks />
      {/* 3rd Row */}
      <MemberProfile />
    </div>
  );
};

export default Sidebar;
