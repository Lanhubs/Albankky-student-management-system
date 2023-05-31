import {
  Button,
  Box,
  Flex,
  createStandaloneToast,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { COOKIE_SECRET, DEPTS, FLEX, LEVELS } from "../../Components/DATA";
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
import axios from "axios";

const Enrol = () => {
  const [profilePic, setProfilePic] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [middleName, setMiddleName] = React.useState();
  const [courses, setCourses] = React.useState("");
  const [regNo, setRegNo] = React.useState();
  const [dateOfBirth, setDateOfBirth] = React.useState();

  const [level, setLevel] = React.useState("");
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const { toast, ToastContainer } = createStandaloneToast();
  const [department, setDepartment] = React.useState("");
  
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
        position: "top-right",
        duration: 3000,
      });
    }
    const fullName = firstName + " " + lastName + " " + middleName;
    const formData = {
      fullName,
      profilePic,
      dateOfBirth,
      password,
      email,
      department,
      courses: courses.replace(",", ""),
      registrationNumber: regNo,
      level,
    };

    setSubmitting(true);
    fetch("/api/enrol", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(res=>res.json())
      .then((data) => {
        if (data.status === 2000) {
          toast({
            description: "successfully enrolled. redirecting...",
            status: "success",
            position: "top-right",
            title: "successfully enrolled. redirecting...",
            duration: 3000,
          });
          localStorage.setItem(COOKIE_SECRET, JSON.stringify(data))          
          
          navigate("/");
          console.log(data);
        } else {
          toast({
            description: data.data.msg,
            status: "error",
            position: "top-right",
            title: data.data.msg,
            duration: 3000,
          });
        }
      })
      .catch((e) => {
        toast({
          description: e.msg,
          title: e.msg,
          position: "top-right",
          status: "error",
        });
      });
  };
  return (
    <>
      <Box width={"100vw"} height={{ base: "full", md: "100vh" }}>
        <Heading
          fontSize={{ base: 20, md: 30 }}
          my="10"
          mx="auto"
          textAlign="center"
        >
          Student Management Mystem
        </Heading>

        <Flex
          gap="7%"
          width={{ base: "95%", md: "70%", lg: "60%" }}
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
         
          <Box
            width={{ base: "full", md: "full", lg: "35%" }}
            display={"flex"}
            flexDir="column"
            gap="1rem"
          >
            <Cus_File_Upload_Input handleChange={setProfilePic} />
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
              label={"choose department"}
              placeholder="department"
            />
            <Cus_Select_Dept
              depts={LEVELS}
              department={level}
              setDepartment={setLevel}
              label={"choose level"}
              placeholder="level"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Enrol;
