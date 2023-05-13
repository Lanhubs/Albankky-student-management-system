import {
  Avatar,
  Flex,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { getFingerprint, getRawFingerprint } from "react-fingerprint";

const Authenticate_FingerPrint = ({ children }) => {
  const [details, setDetails] = React.useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  React.useEffect(() => {
    async () => {
      const rawData = getRawFingerprint();
      const data = getFingerprint();
      console.log(rawData, data);
    };
  }, []);
  return (
    <>
      <span onClick={onOpen}>{children}</span>
      <Modal
        isOpen={isOpen}
        closeOnEsc={true}ce 
        closeOnOverlayClick={true}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          bg="#fff"
          m="auto"
          width={{ sm: "90%", md: "50%" }}
          p="1rem"
        >
          <ModalBody>
            <Flex flexDir={"column"} alignItems="center" gap="1rem">
              <Avatar />

              <HStack gap="1rem">
                <Text textTransform={"capitalize"}>full name:</Text>
                <Text>Issa Shuaib</Text>
              </HStack>
              <HStack gap="1rem">
                <Text textTransform={"capitalize"}>Registration No:</Text>
                <Text>CSC/20/CSC/00507</Text>
              </HStack>
              {/* <Input type={"file"} accept="image/*" /> */}
              <Image />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Authenticate_FingerPrint;
