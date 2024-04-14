import React from "react";
import { NavLink } from "../../constants";

const SideNav = () => {
  return (
    <div>
      {NavLink.map((link, idx) => (
        <a key={idx} className="bg-yellow-200">
          {link.lable}
        </a>
      ))}
    </div>
  );
};

export default SideNav;
