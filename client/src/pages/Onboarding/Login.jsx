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

  return (
    <Box
      w="100vw"
      height={{ base: "100vh" }}
      display={FLEX}
      bg="#fff"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        width={{ base: "90%", lg: "50%" }}
        p="2rem 1rem"
        d={FLEX}
        display={FLEX}
        shadow="md"
        padding="2rem 1rem"
        flexDir="column"
        bg="#fff"
        gap="1rem"
        background="#fff"
      >
        <Heading textAlign="center" my="1.rem">
          Log in to Portal
        </Heading>
        <FormControl w="full">
          <FormLabel>registration number</FormLabel>

          <Input
            placeholder="FAC/YEAR/DEPT/SN"
            onChange={(e) => setRegNo(e.target.value)}
            border="1.5px solid"
            borderColor="green.500"
            borderRadius="10px"
            p="10px"
            width="full"
            type={"text"}
          />
        </FormControl>
        <FormControl w="full">
          <FormLabel>registration number</FormLabel>

          <Input
            placeholder="************"
            onChange={(e) => setPassword(e.target.value)}
            border="1.5px solid"
            borderColor="green.500"
            borderRadius="10px"
            p="10px"
            width="full"
            type={"password"}
          />
        </FormControl>

        <Button>Log in</Button>
      </Card>
    </Box>
  );
};
