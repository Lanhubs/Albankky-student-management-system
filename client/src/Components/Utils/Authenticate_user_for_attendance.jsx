import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Image,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { UserState } from "../Templates/UserProvider";
import * as faceapi from "face-api.js";
import Webcam from "react-webcam";
import SampleImage from "../../assets/sampleImage.jpg";
// import 'face-api.js/dist/face-api.css'
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
      .post(`/api/verify-student?course=${course}`, {
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
          {/*  <ModalBody>
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
          </ModalBody> */}
          <FaceComparison />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Authenticate_user_for_attendance;

const FaceComparison = ({ unmount }) => {
  const videoRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const chunksRef = React.useRef([]);
  const [blob, setBlob] = React.useState(null);
  // Function to send video to the backend server
  useEffect(() => {
    (async () => {
      let mediaStream;
      let chunks= [];
      // Get access to the webcam video stream

      var stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      // Start recording when component mounts
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
      
       chunks.push(event.data);
      });
      mediaRecorderRef.current.start();

      // Stop recording and send video to the backend server when component unmounts
      return () => {
        mediaRecorderRef.current.stop();
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(chunks, { type: "video/webm" });
        setBlob(blob);
      };
    })();
  }, []);
  console.log(blob);
  const verifyFace = () => {
    const formData = new FormData();
    
    formData.append("video", blob, "recorded.webm");

    fetch("/api/compare-faces", {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the server
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div>
      <video autoPlay ref={videoRef} id="video" className="w-full h-full" />
      <button onClick={verifyFace} className="">
        verify face
      </button>
    </div>
  );
};
