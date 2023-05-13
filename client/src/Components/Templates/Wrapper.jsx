import React from "react";
import Sidebar from "./Sidebar";
import "../../App.css";
import "../../index.css";
import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <>
      <Box
        width="100vw"
        height={{ base: "100%", md: "100vh", lg: "100vh" }}
        style={{
          backgroundColor: " #FAFAFA",
        }}
      >
        <Sidebar />
         <Box
          height="100%"
        
          overflowY={"hidden"}
          ml={{ sm: 0, md: "310px" }}
          bg="#f3f3f3"
          overflowX="hidden"
          
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
