import React from "react";
import Sidebar from "./Sidebar";
import "../../App.css";
import "../../index.css";
import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <>
      <div
        className="w-screen sm:h-full md:h-full clash-font-family"
        style={{
          backgroundColor: " #FAFAFA",
        }}
      >
        <Sidebar />
        <div className="h-full bg-[#fafafa] overflow-y-visible md:ml-[290px] sm:[ml-0] overflow-x-hidden z-[1000]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
