import { Button, Box, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FLEX } from "../../Components/DATA";
import Sidebar from "../../Components/Templates/Sidebar";
import Wrapper from "../../Components/Templates/Wrapper";
import {
  Cus_File_Uploaf_Input,
  Cus_Input,
  Password,
} from "../../Components/Utils/Cus_Inputs";
import FingerPrint_Grabber from "../../Components/Utils/FingerPrint_Grabber";

const Enrol = () => {
  const [profilePic, setProfilePic] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [middleName, setMiddleName] = React.useState();
  const [courses, setCourses] = React.useState();
  const [regNo, setRegNo] = React.useState();
  const [dateOfBirth, setDateOfBirth] = React.useState();
  const [fingerPrintId, setFingerPrintId] = React.useState();
  const [password, setPassword] = React.useState(false);
  const handleEnrollment = () => {
    const formData = new FormData();
    const fullName = firstName + " " + lastName + " " + middleName;
    formData.append("fullName", fullName);
    formData.append("profilePic", profilePic);
    formData.append("registrationNumber", regNo);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("fingerPrintId", fingerPrintId);
    formData.append("password", password);

    fetch("/api/enrol", {
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  // React.useEffect(()=>{}, [])
  return (
    <Wrapper>
      <Flex
        gap="7%"
        width={{ base: "100vw", md: "80%", lg: "60%" }}
        height={{ base: "full", md: "100vh" }}
        display={FLEX}
        my="20%"
        flexDirection={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
        alignItems="center"
        padding={{ base: "5%", md: "1rem" }}
        m="auto"
        margin="auto"
      >
        <Box
          width={{ base: "full", md: "full", lg: "35%" }}
          display={"flex"}
          flexDir="column"
          gap="1rem"
        >
          <Cus_File_Uploaf_Input handleChange={setProfilePic} />
          <FingerPrint_Grabber />
          <Button
            onClick={handleEnrollment}
            w="full"
            my="1rem"
            bg="blackAlpha.600"
            height="50px"
            color="white"
            fontSize={20}
          >
            Enrol now
          </Button>
        </Box>

        <Box
          display={FLEX}
          flexDir="column"
          h="full"
          gap="1rem"
          flex={1}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          {/* first name */}
          <Cus_Input
            placeholder={"first name"}
            handleChange={setFirstName}
            inputType={"text"}
            label="first name"
          />
          {/* middle name */}
          <Cus_Input
            placeholder={"middle name"}
            handleChange={setMiddleName}
            inputType={"text"}
            label="middle name"
          />

          {/* last name */}
          <Cus_Input
            placeholder={"last name"}
            handleChange={setLastName}
            inputType={"text"}
            label="last name"
          />

          {/* reg naumber */}

          <Cus_Input
            placeholder={"registration number"}
            handleChange={setRegNo}
            inputType={"text"}
            label="registration number"
          />

          <Password handleChange={setPassword} label="password" />
          {/* date of birth */}
          <Cus_Input
            placeholder={"Date of birth"}
            handleChange={setDateOfBirth}
            inputType={"text"}
            label="date of birth"
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Enrol;
