import React from "react";
// import {Link} from "react-router-dom"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  HStack,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";
import { FLEX, SIDEBAR_DATA } from "../DATA";
import { UserState } from "./UserProvider";

const Sidebar = ({  showSideBar, setShowSideBar, children }) => {
  const {user} =UserState()
  return (
    <>
      <span onClick={() => setShowSideBar(true)}>{children}</span>

      <Box
        transition="2s ease"
        width={{ base: showSideBar? "90%":0, md: "290px", lg: "290px" }}
        pos="fixed"
        zIndex={100}
        h="100vh"
        bg="#000"
        borderRightWidth={1}
        borderRightColor={"#E9EAEC"}
        fontFamily="clash"
        display={{
          base: showSideBar ? "flex" : "none",
          md: FLEX,
          lg: FLEX,
        }}
        flexDirection="column"
        
      >
        <Box height="30%" w="full" bg="#fff" display="flex" alignItems="center" justifyContent='center'>
          <Text textAlign={"center"} fontSize={25} fontFamily="Roboto">
            Albankky Student management system
          </Text>
        </Box>
        <Box w="full" fontFamily="Roboto">
          {SIDEBAR_DATA?.map((item, idx) => (
            <HStack
              m="10px"
              alignItems="center"
              gap="1rem"
              p="1rem"
              key={idx}
              to={item.link}
              justifyContent="space-between"
              mx="1rem"
              as={Link}
              textColor="#fff"
            >
              <Text
                fontFamily={"Roboto light"}
                textTransform="capitalize"
                textColor="#fff"
                fontWeight={500}
                as="div"

              >
                {item.title}
              </Text>
              {item.icon}
            </HStack>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
