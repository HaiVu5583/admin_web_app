import React from "react";
import logo from "src/logo.svg";
import { Link, useLocation } from "react-router-dom";
import SidebarLinkItem from "./SidebarLinkItem";

const SideBar = (props) => {
  const location = useLocation();
  return (
    <aside className="w-64 min-h-screen bg-gray-800">
      <div className="flex items-center border-b border-r border-gray-300 border-opacity-50 h-14">
        <img className="h-12 w-12" src={logo} alt="Logo" />
        <span className="text-xl font-semibold text-white">Admin Web</span>
      </div>
      <nav>
        <SidebarLinkItem path="/" text={"Dashboard"} />
        <SidebarLinkItem path="/user" text={"User"} />
        <SidebarLinkItem path="/banner" text={"Banner"} />
        <SidebarLinkItem path="/post" text={"Post"} />
        <SidebarLinkItem path="/session" text={"Session"} />
        <SidebarLinkItem path="/order" text={"Order"} />
        <SidebarLinkItem path="/payment" text={"Payment"} />
      </nav>
    </aside>
  );
};

export default SideBar;
