import {
  Box,
  Button,
  Card,
  Heading,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { FLEX } from "../../Components/DATA";
import { Cus_Input, Password } from "../../Components/Utils/Cus_Inputs";
export const Login = () => {
  const [regNo, setRegNo] = React.useState();
  const [password, setPassword] = React.useState();
  const handleLogIn = () => {
    fetch("/api/login", {
      body: JSON.stringify({ registrationNumber: regNo, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <Box
      w="100vw"
      height={{ sm: "100vh" }}
      display={FLEX}
      flexDir="column"
      bg="#fff"
      alignItems="center"
      justifyContent="center"
    >
    <Heading fontSize={30} my="10">
      Albankky student management system
    </Heading>
      <Card
        width={{ sm: "90%", md: "35%" }}
        px="2rem"
        height={{sm:"70%", md: "45%"}}
     
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
        <Cus_Input
          handleChange={setPassword}
          label="password"
          placeholder="************"
        />

        <Button height="50px" my="1.5rem" bg="green.500">Log in</Button>
      </Card>
    </Box>
  );
};
