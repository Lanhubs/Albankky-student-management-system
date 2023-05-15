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
        p={{ base: "5%", md: "5%" }}
        zIndex={1000}
        pos="relative"
        w="full"
        height="100%"

      >
        <Heading fontSize={25}>Students in Attendance</Heading>
        <Heading fontSize={20} my="1rem">
          Course name: {/*  */}
        </Heading>

        <Flex
          rowGap="1rem"
          
          columnGap="1rem"
          w="full"
          h="full"
          flexWrap={{ base: "wrap", md: "wrap", lg: "wrap" }}
        >
          <Box
            shadow="md"
            rounded={"md"}
            bg="#fff"
            padding="1rem"
            height={"250px"} 
            w={{ base: "47%", md: "290px" }}            

            display={FLEX}
            columnGap="1rem"
            flexDir="column"
            alignItems={"center"}
          >
            <Avatar width="60px" height="60px" />
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