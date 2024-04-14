import React from "react";
import SideNav from "../components/SideNav/SideNav";

const MainUserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <SideNav />
      </nav>
      {children}
    </>
  );
};

export default MainUserLayout;
