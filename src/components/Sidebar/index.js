import React from "react";
import logo from "src/logo.svg";

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
            <a href="#">Dashboard</a>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <a href="#">User</a>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <a href="#">Banner</a>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <a href="#">Post</a>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <a href="#">Session</a>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <a href="#">Order</a>
          </li>
        </ul>
        <ul className="px-4 py-2">
          <li className="text-white">
            <a href="#">Payment</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
