import {
  Box,
  Button,
  Card,
  Heading,
  Input,
  FormControl,
  FormLabel,
  createStandaloneToast,
  cookieStorageManager,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { FLEX } from "../../Components/DATA";
import { Cus_Input, Password } from "../../Components/Utils/Cus_Inputs";
import Cookie from "js-cookie";
import {useNavigate} from "react-router-dom"
export const Login = () => {
  const [regNo, setRegNo] = React.useState();
  const [password, setPassword] = React.useState();
  const [submitting, setSubmitting] = React.useState(false)
  const { toast, ToastContainer } = createStandaloneToast();
  const navigate = useNavigate()
  const handleLogIn = () => {
    if (password === "" || regNo === "") {
      toast({
        description: "input fields cannot be empty",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
    setSubmitting(true)
    fetch("/api/login", {
      body: JSON.stringify({ registrationNumber: regNo, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data)
          Cookie.set(
            "albankky-student-management-system",
            JSON.stringify(data),
            {
              expires: 3,
              sameSite: "strict",
            }
          );
          navigate("/")
        }
      })
      .catch((e) => {
        console.log(e);

      });
  };

  return (
    <Box
      w="100vw"
      height={{ base: "100vh" }}
      display={FLEX}
      flexDir="column"
      bg="#fafafa"
      alignItems="center"
      justifyContent="center"
    >
      <Heading fontSize={30} my="10">
        Albankky student management system
      </Heading>
      <ToastContainer />
      <Card
        width={{ base: "90%", md: "60%", lg: "35%"}}
        px="2rem"
        height={{ base: "70%", md: "45%" }}
        d={FLEX}
        display={FLEX}
        boxShadow={"rgba(0, 0, 0, 0.6)"}
        shadow="lg"
        rounded="md"
        flexDir="column"
        bg="#fff"
        gap="1rem"
        background="#fff"
      >
        <Heading textAlign="center" my="1rem">
          Log in to Portal
        </Heading>
        <Cus_Input
          handleChange={setRegNo}
          label="registration number"
          placeholder="FAC/YEAR/DEPT/SN"
          inputType={"text"}
        />
        <Password
          handleChange={setPassword}
          label="password"
          inputType={"password"}
          placeholder="************"
        />

        <Button onCLick={handleLogIn} height="50px" my="1.5rem" bg="green.500">
        {submitting ? (
          <Spinner/>
        ): "Log in"}
        </Button>
      </Card>
    </Box>
  );
};
