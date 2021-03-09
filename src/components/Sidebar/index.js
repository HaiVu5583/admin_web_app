import React from "react";
import logo from "src/logo.svg";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <aside className="w-64 min-h-screen bg-gray-800">
      <div className="flex items-center border-b border-r border-gray-300 border-opacity-50 h-14">
        <img className="h-12 w-12" src={logo} alt="Logo" />
        <span className="text-xl font-semibold text-white">Admin Web</span>
      </div>
      <nav>
        <ul className="px-4 pt-4 pb-2">
          <li className="text-white">
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <Link to="/user">User</Link>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <Link to="/banner">Banner</Link>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <Link to="/post">Post</Link>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <Link to="/session">Session</Link>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <Link to="/order">Order</Link>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white"></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
