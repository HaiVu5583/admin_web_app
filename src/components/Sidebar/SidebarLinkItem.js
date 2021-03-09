import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const SideBarLinkItem = React.memo((props) => {
  const { path, text } = props;
  const isMatch = useRouteMatch({
    path,
    exact: true,
  });
  if (isMatch) {
    return (
      <ul className="px-4 bg-white bg-opacity-20 border-l-2 border-blue-400">
        <li>
          <Link to={path}>
            <div className="py-2 text-white">{text}</div>
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="px-4 border-l-2 border-transparent">
      <li>
        <Link to={path}>
          <div className="py-2 text-white">{text}</div>
        </Link>
      </li>
    </ul>
  );
});

export default SideBarLinkItem;
