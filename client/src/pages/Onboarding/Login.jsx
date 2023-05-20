import {
  Box,
  Button,
  Link,
  Text,
  Card,
  Heading,
  createStandaloneToast,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { COOKIE_SECRET, FLEX } from "../../Components/DATA";
import { Cus_Input, Password } from "../../Components/Utils/Cus_Inputs";
import Cookies from "js-cookie";

import {NavLink, useNavigate } from "react-router-dom";
export const Login = () => {
  const [regNo, setRegNo] = React.useState();
  const [password, setPassword] = React.useState();
  const [submitting, setSubmitting] = React.useState(false);
  const { toast, ToastContainer } = createStandaloneToast();
  const navigate = useNavigate();
  const handleLogIn = () => {
    if (password === "" || regNo === "") {
      toast({
        description: "input fields cannot be empty",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
    setSubmitting(true);
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
          toast({
            description: data.msg,
            status: "success",

            position: "top-right",
            duration: 3000,
            isClosable: true,
          });

          Cookies.set(COOKIE_SECRET, JSON.stringify(data), {
            expires: 3,
            sameSite: "strict",
          });
          navigate("/");
        }
      })
      .catch((e) => {
        toast({
          description: e.msg,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        setSubmitting(false);
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
      <ToastContainer />
      <Heading fontSize={30} my="10" mx="auto" textAlign="center">
        Albankky student management system
      </Heading>
      <Card
        width={{ base: "85%", md: "60%", lg: "35%" }}
        px="2rem"
        height={{ base: "70%", md: "45%" }}
        d={FLEX}
        display={FLEX}
        shadow="md"
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
        <Text >Don't have an account ? <Link as={NavLink} to="/signup">Sign up</Link></Text>
        <Button onClick={handleLogIn} height="50px" my="1.5rem" bg="green.500">
          {submitting ? <Spinner /> : "Log in"}
        </Button>
      </Card>
    </Box>
  );
};
