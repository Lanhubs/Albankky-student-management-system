import {
  Button,
  Box,
  Flex,
  createStandaloneToast,
  Spinner,
  Text,
  Link,
  Toast,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { COOKIE_SECRET, DEPTS, FLEX } from "../../Components/DATA";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Cus_File_Upload_Input,
  Cus_Input,
  Cus_Select,
  Cus_Select_Dept,
  Password,
} from "../../Components/Utils/Cus_Inputs";
import { FaSpinner } from "react-icons/fa";
import Cookies from "js-cookie";

const Enrol = () => {
  const [profilePic, setProfilePic] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [middleName, setMiddleName] = React.useState();
  const [courses, setCourses] = React.useState("");
  const [regNo, setRegNo] = React.useState();
  const [dateOfBirth, setDateOfBirth] = React.useState();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState();
  const [submitting, setSubmitting] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const { toast, ToastContainer } = createStandaloneToast();
  const [department, setDepartment] = React.useState("");
  const [toastDetails, setToastDetails] = React.useState({
    status: "",
    description: "",
    title: "",
  });
  const handleEnrollment = () => {
    if (
      profilePic === "" ||
      firstName === "" ||
      email === "" ||
      courses === "" ||
      regNo === "" ||
      dateOfBirth === "" ||
    
      lastName === "" ||
      middleName === "" ||
      password === ""
    ) {
      toast({
        status: "error",
        description: "all fields must be filled",
        isClosable: false,
        position: "top",
        duration: 3000,
      });
    }
    const formData = new FormData();
    const fullName = firstName + " " + lastName + " " + middleName;
    formData.append("fullName", fullName);
    formData.append("profilePic", profilePic);
    formData.append("registrationNumber", regNo);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("password", password);
    formData.append("courses", courses.replace(",", ""));
    formData.append("email", email);
    formData.append("department", department);
    setSubmitting(true);
    fetch("/api/enrol", {
      body: formData,
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          description: "successfully enrolled. redirecting...",
          status: "success",
          title: "successfully enrolled. redirecting...",
          duration: 3000,
        });

        Cookies.set(COOKIE_SECRET, JSON.stringify(data), {
          expires: 3,
          sameSite: "strict",
        });
        navigate("/");
        console.log(data);
      })
      .catch((e) => {
        toast({
          description: e.msg,
          title: e.msg,
          status: "error",
        });
      });
  };

  return (
    <>
    <Box width={"100vw"} height={{ base: "full", md: "100vh" }}>
    <Heading fontSize={30} my="10" mx="auto" textAlign="center">
          Student Management Mystem
        </Heading>

      <Flex
        gap="7%"
        width={{ base: "100vw", md: "70%", lg: "60%" }}
        h="full"
        display={FLEX}
        bg="#fff"
        shadow="md"
        // my="20%"
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        alignItems="center"
        padding={{ base: "5%", md: "1rem" }}
        m="auto"
        margin="auto"
      >
        <ToastContainer />
        {/* <Toast
          duration={3000}
          description={toastDetails.description}
          position="top"
          status={toastDetails.status}
          title={toastDetails.title}
          colorScheme="red"
          icon
        /> */}
       
        <Box
          width={{ base: "full", md: "full", lg: "35%" }}
          display={"flex"}
          flexDir="column"
          gap="1rem"
        >
          <Cus_File_Upload_Input handleChange={setProfilePic} />
        
          <Button
            onClick={handleEnrollment}
            w="full"
            my="1rem"
            bg="blackAlpha.600"
            height="50px"
            color="white"
            fontSize={20}
          >
            {submitting ? <FaSpinner /> : "Enrol now"}
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
          {/* last name */}
          <Cus_Input
            placeholder={"jondoe@gmail.com"}
            handleChange={setEmail}
            inputType={"email"}
            label="email"
          />

          {/* reg number */}

          <Cus_Input
            placeholder={"FAC/YEAR/DEG/SN"}
            handleChange={setRegNo}
            inputType={"text"}
            label="registration number"
          />

          <Password handleChange={setPassword} label="password" />
          {/* date of birth */}

          <Cus_Input
            placeholder={"Date of birth"}
            handleChange={setDateOfBirth}
            inputType={"date"}
            label="date of birth"
          />
          {/* choose courses */}
          <Cus_Select
            courses={courses}
            setCourses={setCourses}
            placeholder="choose courses"
          />
          <Cus_Select_Dept
            depts={DEPTS}
            department={department}
            setDepartment={setDepartment}
            placeholder="choose your department"
          />

          <Text>
            Already enrolled?{" "}
            <Link
              textTransform="capitalize"
              fontSize={18}
              color="green.500"
              as={NavLink}
              to="/login"
            >
              log in
            </Link>
          </Text>
        </Box>
      </Flex>
      </Box>

    </>
  );
};

export default Enrol;
