import { Avatar, Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FLEX } from "../DATA";
import Sidebar from "../Templates/Sidebar";
const Header = () => {
  return (
    <HStack
      w="full"
      bg="#fff"
      shadow="md"
      p="1rem"
      justifyContent="space-between"
    >
      <Heading as="h3">Albankky student system</Heading>
      <HStack gap="1rem" >
        <Avatar as={NavLink} w="60px" height="60px" />
        <Sidebar>
          <Box cursor="pointer" d={{base: FLEX, md: "none"}}>
            <FaHamburger fontSize={30} />
          </Box>
        </Sidebar>
      </HStack>
    </HStack>
  );
};

export default Header;
