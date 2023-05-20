import { Avatar, Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaBars, FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FLEX } from "../DATA";
import Sidebar from "../Templates/Sidebar";
import { UserState } from "../Templates/UserProvider";
const Header = (props) => {
  const {user} = UserState();
  return (
    <HStack
      w="full"
      bg="#fff"
      shadow="md"
      p="1rem"
      px={{base: "10%", md: "5%"}}
      justifyContent="space-between"
    >
      <Text>{user?.fullName}</Text>
      <HStack gap="1rem">
        <Avatar as={NavLink} src={user?.profilePic} w="50px" height="50px" />
        
        <Box cursor="pointer" d={{ base: FLEX, md: "none" }} onClick={()=>props.setShowSideBar(true)}>
          <FaBars fontSize={20} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Header;
