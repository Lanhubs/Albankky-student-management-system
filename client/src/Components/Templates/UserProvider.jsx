import Cookies from "js-cookie";
import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { COOKIE_SECRET } from "../DATA";
// creating the context
const Context = createContext({
  token: "",
  user: {},
});
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const abortController = new AbortController();
  const navigate = useNavigate();
  React.useEffect(() => {
    const cookie = Cookies.get(COOKIE_SECRET);

    // if (cookie === ""|| cookie === " "|| cookie === null ) {
    if (!cookie) {
      navigate("/login");
    } else if (cookie !== "" || cookie !== " " || cookie !== null) {
      const data = JSON.parse(cookie);
      
      setUser(data.data);
      setToken(data.token);
    }

    return abortController.abort();
  }, []);
  return (
    <Context.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </Context.Provider>
  );
};
export const UserState = () => {
  return useContext(Context);
};

export default UserProvider;
