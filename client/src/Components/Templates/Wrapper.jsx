import React from "react";
import Sidebar from "./Sidebar";
import "../../App.css";
import "../../index.css";
import { Box } from "@chakra-ui/react";
import Header from "../Utils/Header";
import UserProvider from "./UserProvider";

const Wrapper = ({ children }) => {
  const [showSideBar, setShowSideBar] = React.useState(false)
  return (
    <>
      <UserProvider>
        <Box
          width="100vw"
          height={{ base: "100%", md: "100vh", lg: "100vh" }}
          style={{
            backgroundColor: " #FAFAFA",
          }}
        >
          <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
          <Box
            height="100%"
            overflowY={"hidden"}
            ml={{ base: 0, md: "290px" }}
            bg="#f3f3f3"
            overflowX="hidden"
          >
            <Header setShowSideBar={setShowSideBar}/>
            {children}
          </Box>
        </Box>
      </UserProvider>
    </>
  );
};

export default Wrapper;
