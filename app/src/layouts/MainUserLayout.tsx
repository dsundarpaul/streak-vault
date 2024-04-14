import SideNav from "../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";

const MainUserLayout = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-28 border-r-[1px] border-slate-400 p-2">
        <SideNav />
      </nav>
      <section className="p-4">
        <Outlet />
      </section>
    </div>
  );
};

export default MainUserLayout;
