import { get, post } from "./common";

export const getToken = (username, password) => {
  return post({ url: "/authentication/login", data: { username, password } });
};

export const getUserInfo = () => {
  return get({ url: "/authentication/userinfo" });
};

export const logout = () => {};
