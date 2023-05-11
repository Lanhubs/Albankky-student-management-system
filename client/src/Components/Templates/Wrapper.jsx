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
        {/*  <Box
          height="100%"
        
          overflowY={"hidden"}
          ml={{ sm: 0, md: "290px" }}
          overflowX="hidden"
          zIndex={100}
        > */}
        <div className="h-screen bg-[#fafafa] overflow-y-visible md:ml-[290px] sm:[ml-0] overflow-x-hidden z-[1000]">
          {children}
        </div>
      </Box>
    </>
  );
};

export default Wrapper;
