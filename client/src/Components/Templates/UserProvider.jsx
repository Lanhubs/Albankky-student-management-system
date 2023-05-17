import Cookies from "js-cookie";
import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
// creating the context
const Context = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const abortController = new AbortController();
  const navigate = useNavigate();
  React.useEffect(() => {
    const cookie = Cookies.get("albankky-student-management-system");

    // if (cookie === ""|| cookie === " "|| cookie === null ) {
    if (!cookie) {
      navigate("/login");
    } else if (cookie !== "" || cookie !== " " || cookie !== null) {
      const data = JSON.parse(cookie);
      setUser(data);
    }

    return abortController.abort();
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
export const UserState = () => {
  return useContext(Context);
};

export default UserProvider;
