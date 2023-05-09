import { Box, Button, Card, Heading, Input, FormControl,FormLabel,  } from "@chakra-ui/react";
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
        width={{ base: "90%", lg: "50%"}}
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
        <Heading textAlign="center" my="1.rem">Log in to Portal</Heading>
        <Cus_Input
          handleChange={setRegNo}
          inputType={"text"}
          
          placeholder="CSC/YEAR/CSC/S|N"
          label={"registration Number"}
        />
        <Password
          

          handleChange={setPassword}
          inputType={"password"}
          placeholder="***********"

          label={"registration Number"}
        />
        <FormControl>
          <FormLabel textTransform="capitalize"> password</FormLabel>
          <Input type="password" placeholder="password" p="10px" border="1.7px solid" borderRadius="10px"  />
        </FormControl>
        <Button>Log in</Button>
      </Card>
    </Box>
  );
};
