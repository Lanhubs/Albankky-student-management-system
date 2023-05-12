import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdFingerprint } from "react-icons/md";
import { FLEX } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
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
      <Box w="full" height="full" p="1rem">
        <Flex gap="5%" w="full" m="auto">
          <Box
            shadow="md"
            rounded={"md"}
            bg="#fff"
            padding="1rem"
            height={"250px"}
            w={{ sm: "47%", md: "30%", lg: "23%" }}
            display={FLEX}
            flexDir="column"
            alignItems={"center"}
          >
            <Avatar width="70px" height="70px" />
            <Text>Yakubu musa</Text>
            <Button>
              Attend class
              <MdFingerprint size={20} />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default AttendLecture;
