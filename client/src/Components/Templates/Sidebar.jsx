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
  const [showSideBar, setShowSideBar] = React.useState(false);
  return (
    <>
      <span onClick={() => setShowSideBar(true)}>{children}</span>

      <Box
        transition="2s ease"
        width={{ sm: "full", md: "290px", lg: "290px" }}
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
        <Box height="30%" w="full" bg="#fff"></Box>
        <Box w="full" fontFamily="Roboto">
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
