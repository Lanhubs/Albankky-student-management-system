import React from "react";
import Sidebar from "./Sidebar";
import "../../App.css"
import "../../index.css"
import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    // <Box as="div" className="w-screen md:h-screen ld:h-screen sm:h-full ">
    <>
      <Sidebar />
      <Box as="div" className="App md:h-screen lg:h-screen sm:h-full md:ml-[25%] bg-white">
        
        {children}
      </Box>
    </>
    );
};

export default Wrapper;
