import {
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
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
  const handleEnrollment = () => {};
  // React.useEffect(()=>{}, [])
  return (
    <Wrapper>
      <Box
        gap="7%"
        w={{base: "90%", md: "60%"}}
        width={{base: "90%", md: "60%"}}
        display={FLEX}
        my="auto"
        height="full"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        padding="1rem"
        bg="#000"
        m="auto"
        margin="auto"
      >
        <Box width="25%">
          <Cus_File_Uploaf_Input handleChange={setProfilePic} />
          <FingerPrint_Grabber />
          <Button
            onClick={handleEnrollment}
            className="custom-button base:none md:flex hover:bg-slate-100 rounded-base border-[1.5px] border-solid border-green-500  hover:"
          >
            Enrol now
          </Button>
        </Box>

        <Box flexDir="column" gap="1rem" flex={1}>
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

          <Password handleChange={setPassword} />
          {/* date of birth */}
          <Cus_Input
            placeholder={"Date of birth"}
            handleChange={setDateOfBirth}
            inputType={"text"}
            label="date of birth"
          />

          <Button
            onClick={handleEnrollment}
            className="custom-button hover:bg-slate-100  base:flex md:none rounded-base border-[1.5px] border-solid border-green-500  hover:"
          >
            Enrol now
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Enrol;
