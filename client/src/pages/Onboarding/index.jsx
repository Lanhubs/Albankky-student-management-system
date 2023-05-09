import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../Components/Templates/Sidebar";
import Wrapper from "../../Components/Templates/Wrapper";
import {
  Cus_File_Uploaf_Input,
  Cus_Input,
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
  const handleEnrollment = () => {};
  // React.useEffect(()=>{}, [])
  return (
    <Wrapper>
      <Stack
        gap="7%"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        padding="1rem"
        m="auto"
        margin="auto"
      >
        <Stack width="25%">
          <Cus_File_Uploaf_Input handleChange={setProfilePic} />
          <FingerPrint_Grabber />
          <button
            onClick={handleEnrollment}
            className="custom-button base:none md:flex hover:bg-slate-100 rounded-base border-[1.5px] border-solid border-green-500  hover:"
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
          <Button
            onClick={handleEnrollment}
            className="custom-button hover:bg-slate-100  base:flex md:none rounded-base border-[1.5px] border-solid border-green-500  hover:"
          >
            Enrol now
          </Button>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

const T =()=>(
  <div
  className="w-screen sm:h-full md:h-full clash-font-family"
  style={{
    backgroundColor: " #FAFAFA",
  }}
>
  <Sidebar/>
  <div className="h-full bg-[#fafafa] overflow-y-visible md:ml-[290px] sm:[ml-0] overflow-x-hidden z-[1000]">
    <DashHeader
      header={header}
      userDetails={userdetails}
      setOpenSidebar={setOpenSideBar}
    />
    {children}
  </div>
</div>
)
export default Enrol;
