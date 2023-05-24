import Cookies from "js-cookie";
import React, { createContext, useContext } from "react";
import { json, useNavigate } from "react-router-dom";
import { COOKIE_SECRET } from "../DATA";
// creating the context
export const Context = createContext({
  token: "",
  user: {},
  isAdmin: false,
});
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);
  const abortController = new AbortController();
  const navigate = useNavigate();
  React.useEffect(() => {
    const cookie = Cookies.get(COOKIE_SECRET);

    if (!cookie || cookie === "" || cookie === " ") {
      navigate("/login");
    } else if (cookie !== "" || cookie !== " " || cookie !== null) {
      const data = JSON.parse(cookie);

      setUser(data.data);
      setToken(data.token);
      const cookies = JSON.parse(cookie);
      if (cookies.data.roles.includes("admin")) {
        setIsAdmin(true);
      }
    }

    return abortController.abort();
  }, []);

  return (
    <Context.Provider
      value={{ isAdmin, setIsAdmin, token, setToken, user, setUser }}
    >
      {children}
    </Context.Provider>
  );
};

export const UserState = () => {
  return useContext(Context);
};

export default UserProvider;
