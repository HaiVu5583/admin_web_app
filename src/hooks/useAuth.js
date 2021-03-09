import { useCallback } from "react";
const useAuth = () => {
  const username = localStorage.getItem("username");
  const setUsername = useCallback((text) => {
    localStorage.setItem("username", text);
  }, []);
  const clearUser = useCallback(() => {
    localStorage.removeItem("username");
  }, []);
  return { username, setUsername, clearUser };
};

export default useAuth;
