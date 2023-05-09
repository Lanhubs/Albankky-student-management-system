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

const Sidebar = ({ children }) => {
const [showSideBar, setShowSideBar] = React.useState(false)
  return (
    <>
      <span onClick={setShowSideBar(true)}>{children}</span>

      <Box
        transition="2s ease"
        width={{ base: "full", md: "250px", lg: "270px" }}
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
        justifyContent="space-between"
        flexDirection="col"
      >
        <Box height="30%" w="full" bg="#fff"></Box>
        {SIDEBAR_DATA?.map((item, idx) => (
          <HStack
            m="10px"
            alignItems="center"
            gap="1rem"
            p="1rem"
            key={idx}
            to="#"
            justifyContent="space-between"
            mx="1rem"
            as={Link}
            textColor="#fff"
            bg="green.500"
          >
            <Text textTransform="capitalize" textColor="#fff" fontWeight={500}>
              {item.title}
            </Text>
            {item.icon}
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default Sidebar;
