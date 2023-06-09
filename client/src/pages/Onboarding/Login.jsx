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
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
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
    axios
      .post("/api/login", { registrationNumber: regNo, password })
      .then((data) => {
        if (data.data.status === 2000) {
          console.log(data.data);
          toast({
            description: data.data.msg,
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });

          localStorage.setItem(COOKIE_SECRET, JSON.stringify(data.data));
          /*            Cookies.set("ALBANKKY_SYS_SECRET", JSON.stringify(data.data), {
            expires: 3,
            sameSite: "strict",
            
          });
 */
          navigate("/");
        } else if (data.data.status === 4000) {
          toast({
            description: data.data.msg,
            status: "error",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    Cookies.remove(COOKIE_SECRET);
  }, []);
  return (
    <Box
      w="100vw"
      height={{ base: "100%", md: "100%", lg: "100vh" }}
      display={FLEX}
      flexDir="column"
      bg="#fafafa"
      alignItems="center"
      justifyContent="center"
    >
      <ToastContainer />
      <Heading fontSize={30} my="10" mx="auto" textAlign="center">
        Student Management Mystem
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
        <Text>
          Don't have an account ?{" "}
          <Link as={NavLink} to="/signup">
            Sign up
          </Link>
        </Text>
        <Button onClick={handleLogIn} height="50px" my="1rem" bg="green.500">
          {submitting ? <Spinner /> : "Log in"}
        </Button>
      </Card>
    </Box>
  );
};
