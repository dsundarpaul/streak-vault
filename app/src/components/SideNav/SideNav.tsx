import React from "react";
import { NavLink } from "../../constants";

const SideNav = () => {
  return (
    <div className="flex flex-col">
      {NavLink.map((link, idx) => (
        <a key={idx} className="bg-yellow-200 p-2" href={link.route}>
          {link.lable}
        </a>
      ))}
    </div>
  );
};

export default SideNav;
