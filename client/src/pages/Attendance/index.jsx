import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdFingerprint } from "react-icons/md";
import { FLEX } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import Authenticate_FingerPrint from "../../Components/Utils/Authenticate_FingerPrint";
// import UserImg from "../../assets/Users/user.png"
const AttendLecture = () => {
  const [students, setStudents] = React.useState([]);
  const [student, setStudent] = React.useState({});

  React.useEffect(() => {
    fetch("/api/mark-attendance", {
      headers: {
        Authorization: `Bearer `,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Wrapper>
      <Box
        /* w={{sm: "full", md:"full"}} */ height="full"
        p={{ sm: "", md: "5%" }}
        zIndex={1000}
        // pos="relative"
      >
        <Heading fontSize={25}>Students in Attendance</Heading>
        <Heading fontSize={20} my="1rem">Course name: {/*  */}</Heading>

        <Flex gap="5%" m="auto">
          <Box
            shadow="md"
            rounded={"md"}
            bg="#fff"
            padding="1rem"
            height={"250px"}
            w={{ sm: "47%", md: "30%", lg: "23%" }}
            display={FLEX}
            gap="10%"
            flexDir="column"
            alignItems={"center"}
          >
            <Avatar width="70px" height="70px" />
            <Text>Yakubu musa</Text>
            <Authenticate_FingerPrint>
              <Button>
                Attend class
                <MdFingerprint size={20} />
              </Button>
            </Authenticate_FingerPrint>
          </Box>
          <Box
            shadow="md"
            rounded={"md"}
            bg="#fff"
            padding="1rem"
            height={"250px"}
            w={{ sm: "47%", md: "30%", lg: "23%" }}
            display={FLEX}
            gap="10%"
            flexDir="column"
            alignItems={"center"}
          >
            <Avatar width="70px" height="70px" />
            <Text>Yakubu musa</Text>
            <Authenticate_FingerPrint>
              <Button>
                Attend class
                <MdFingerprint size={20} />
              </Button>
            </Authenticate_FingerPrint>
          </Box>
          <Box
            shadow="md"
            rounded={"md"}
            bg="#fff"
            padding="1rem"
            height={"250px"}
            w={{ sm: "47%", md: "30%", lg: "23%" }}
            display={FLEX}
            gap="10%"
            flexDir="column"
            alignItems={"center"}
          >
            <Avatar width="70px" height="70px" />
            <Text>Yakubu musa</Text>
            <Authenticate_FingerPrint>
              <Button>
                Attend class
                <MdFingerprint size={20} />
              </Button>
            </Authenticate_FingerPrint>
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default AttendLecture;
