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
  SliderMark,
  Mark,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { UserState } from "../Templates/UserProvider";
import { Password } from "./Cus_Inputs";
import { FLEX } from "../DATA";
import { FaMarkdown, FaMarker } from "react-icons/fa";
import { MdPark } from "react-icons/md";
import MarkedIcon from "../../assets/marked.gif";
const Authenticate_user_for_attendance = ({
  children,
  course,
  handleMarkedAttendance,
  markedAttendance,
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
    axios.post(`/api/verify-student?course=${course}`, {
        regNo: user.registrationNumber,
        password,
      })

      .then((data) => {
        const resData = data.data;
        if (resData.status === 2000) {
          handleMarkedAttendance(true);
          setMsg({ bg: "green.500", msg: resData.msg, status: "success" });

          setTimeout(onClose(), 4000);
        }
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
              {markedAttendance ? (
                <Image bg="none" src={MarkedIcon} />
              ) : (
                <>
                  <Avatar src={user?.profilePic} />

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
                </>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Authenticate_user_for_attendance;
