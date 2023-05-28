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
import { STUDENT__SIDBAR_DATA, FLEX, SIDEBAR_DATA } from "../DATA";
import { UserState } from "./UserProvider";
import { NavLink } from "react-router-dom";

const Sidebar = ({ showSideBar, setShowSideBar, children }) => {
  const { user, isAdmin } = UserState();
  return (
    <>
      <span onClick={() => setShowSideBar(true)}>{children}</span>
      <Box
      
        onMouseOut={() => setShowSideBar(false)}
        onMouseLeave={() => setShowSideBar(false)}
        transition="2s ease"
        width={{ base: showSideBar ? "80%" : 0, md: "290px", lg: "290px" }}
        pos="fixed"
        shadow="md"
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
        <Box
          height="30%"
          w="full"
          bg="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="1rem"
        >
          <Text textAlign={"center"} fontSize={25} fontFamily="Roboto">
            Student Management Mystem
          </Text>
        </Box>
        <Box w="full" fontFamily="Roboto">
          {isAdmin ? (
            <>
              {SIDEBAR_DATA?.map((item, idx) => (
                <Link
                  display={FLEX}
                  alignItems="center"
                  justifyContent="space-between"
                  mrgin="10px"
                  gap="1rem"
                  p="1rem"
                  key={idx}
                  to={item.link}
                  mx="1rem"
                  as={NavLink}
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
                </Link>
              ))}
            </>
          ) : (
            <>
              {STUDENT__SIDBAR_DATA?.map((item, idx) => (
                <Link
                  display={FLEX}
                  alignItems="center"
                  justifyContent="space-between"
                  mrgin="10px"
                  gap="1rem"
                  p="1rem"
                  key={idx}
                  to={item.link}
                  mx="1rem"
                  as={NavLink}
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
                </Link>
              ))}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
