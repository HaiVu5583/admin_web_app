import React from "react";
import useAuth from "src/hooks/useAuth";
import { useSelector } from "react-redux";

const ComponentWithAuth = (props) => {
  const username = useSelector((state) => state?.auth?.username);
  return <p>{username}</p>;
};

export default ComponentWithAuth;
