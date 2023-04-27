import React from "react";
import {Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerCloseButton} from "@chakra-ui/react"

const Sidebar = () => {
  return (
    <>
    {/* <div className="fixed top-0 left-0 bg-gray-800 h-screen min-h-screen max-h-screen sm:w-screen md:w-[30vw] lg:w-[30vw]">
      <h3 className="text-white">Profile</h3>
    </div> */}
    <Drawer>
      <DrawerBody>
        <DrawerContent>
          
        </DrawerContent>
      </DrawerBody>
    </Drawer>
    </>
  );
};

export default Sidebar;
