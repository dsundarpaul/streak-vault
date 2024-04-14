import React from "react";
import SideNav from "../components/SideNav/SideNav";

const MainUserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <nav className="w-28 border-r-[1px] border-slate-400 p-2">
        <SideNav />
      </nav>
      <section>{children}</section>
    </div>
  );
};

export default MainUserLayout;
