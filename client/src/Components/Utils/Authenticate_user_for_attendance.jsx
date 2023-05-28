import {
  Avatar,
  Flex,
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { UserState } from "../Templates/UserProvider";
import { Password } from "./Cus_Inputs";
import { FLEX } from "../DATA";

const Authenticate_user_for_attendance = ({
  children,
  course,
  handleMarkedAttendance,
}) => {
  const [msg, setMsg] = React.useState();
  const [password, setPassword] = React.useState("");
  const { token, user } = UserState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const verifyAttendance_and_mark_handler = () => {
    if (password === "" || password === " " || !password) {
      setMsg({
        bg: "red.500",
        msg: "password is compulsory",

        status: "error",
      });
    }

    axios
      .post(`/api/verify-student?course=${course}`, { regNo: user.registrationNumber,
         password })

      .then((data) => {
        console.log(resData);
        const resData = data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <span onClick={onOpen}>{children}</span>
      <Modal
        isOpen={isOpen}
        closeOnEsc={true}
        closeOnOverlayClick={true}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          bg="#fff"
          m="auto"
          width={{ base: "90%", md: "50%" }}
          p="1.5rem 1rem"
        >
          <ModalBody>
            {msg && (
              <Box
                height="40px"
                w="100%"
                display={FLEX}
                alignItems="center"
                justifyContent="center"
                shadow="md"
                bg={msg.status === "error" ? msg.bg : "green.500"}
                mb="1rem"
                rounded="md"
                color="white"
                textTransform="capitalize"
              >
                {msg.msg}
              </Box>
            )}
            <Flex
              flexDir={"column"}
              alignItems="center"
              gap="1.5rem"
              justifyContent="center"
            >
              <Avatar />

              <Text textAlign="center">
                Enter your passsword to confirm your identity and mark your
                attendance
              </Text>
              <Password
                placeholder="**********"
                handleChange={setPassword}
                inputType="password"
                label="enter your password"
              />

              <Button
                rounded="sm"
                height="50px"
                w="full"
                onClick={() => verifyAttendance_and_mark_handler()}
              >
                Mark attendance
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Authenticate_user_for_attendance;
