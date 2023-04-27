import React from "react";
import Sidebar from "./Sidebar";
import "../../App.css"
import "../../index.css"

const Wrapper = ({ children }) => {
  return (
    <div className="w-screen md:h-screen ld:h-screen sm:h-full ">
      <Sidebar />
      <div className=" md:h-screen lg:h-screen sm:h-full bg-white">
        <h1 className="text-gray">hello habeeb</h1>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
