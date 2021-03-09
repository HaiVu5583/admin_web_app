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
      <ul className="px-4 mt-2 py-2 bg-white">
        <li className="text-blue-900">
          <Link to={path}>
            <div>{text}</div>
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="px-4 pt-4 pb-2">
      <li className="text-white">
        <Link to={path}>
          <div>{text}</div>
        </Link>
      </li>
    </ul>
  );
});

export default SideBarLinkItem;
