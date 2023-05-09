import React from "react";

const Context = React.createContext();
const UserProvider = ({}) => {
  const [user, setUser] = React.useState();
  return <Context.Provider value={{user, setUser}}>{children}</Context.Provider>;
};
const useContext = React.useContext(Context);

export { UserProvider, useContext };
