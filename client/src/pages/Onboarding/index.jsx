import { Stack } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../../Components/Templates/Wrapper";
import {
  Cus_File_Uploaf_Input,
  Cus_Input,
} from "../../Components/Utils/Cus_Inputs";

const OnBoarding = () => {
  const [profilePic, setProfilePic] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [middleName, setMiddleName] = React.useState();

  const [regNo, setRegNo] = React.useState();
  const [dateOfBirth, setDateOfBirth] = React.useState();
  const [fingerPrintId, setFingerPrintId] = React.useState();
  const handleEnrollment = () => {};
  return (
    <Wrapper>
      <Stack
        gap="7%"
        flexDirection={{ sm: "column", md: "row" }}
        alignItem="center"
        padding="1rem"
        m="auto"
        margin="auto"
      >
        <Stack width="25%">
          <Cus_File_Uploaf_Input handleChange={setProfilePic} />
          <button
            onClick={handleEnrollment}
            className="custom-button sm:none md:flex hover:bg-slate-100 rounded-sm border-[1.5px] border-solid border-green-500  hover:"
          >
            Enrol now
          </button>
        </Stack>

        <Stack flexDir="column" gap="1rem" flex={1}>
          <Cus_Input handleChange={setFirstName} placeholder="first name:" />
          <Cus_Input handleChange={setMiddleName} placeholder="middle name" />
          <Cus_Input handleChange={setLastName} placeholder="last name" />
          <Cus_Input
            handleChange={setRegNo}
            placeholder="FAC/YEAR/DEPT/SN"
            label="Registration number"
          />
          <Cus_Input handleChange={setDateOfBirth} placeholder="" />
          <button
            onClick={handleEnrollment}
            className="custom-button hover:bg-slate-100  sm:flex md:none rounded-sm border-[1.5px] border-solid border-green-500  hover:"
          >
            Enrol now
          </button>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default OnBoarding;
