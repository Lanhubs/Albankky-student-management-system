import React from "react";
import {Link} from "react-router-dom"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

const Sidebar = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <span onClick={isOpen}>{children}</span>
      <Drawer onOpen={onOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={0.5} backdropBlur={0.5} />
        <DrawerContent width="container.sm" bg="whiteAlpha.100">
          <DrawerHeader height="30%">

          </DrawerHeader>

          <DrawerBody>
            <HStack gap="1rem" p="1rem" as={Link} bg="green.500">

            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
