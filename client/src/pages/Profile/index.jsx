import {
  Avatar,
  Box,
  Card,
  Text,
  Flex,
  Link,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";
import { UserState } from "../../Components/Templates/UserProvider";
import { COOKIE_SECRET } from "../../Components/DATA";
import { FaAnchor } from "react-icons/fa";
import axios from "axios";
const index = () => {
  const { user } = UserState();
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const cookie = JSON.parse(localStorage.getItem(COOKIE_SECRET));
    const token = cookie.token;
    axios.get("/api/get-student", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
     .then((data) => {
        setCourses(data.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Stack w="full" height={{ base: "full", md: "100vh" }} gap="1rem">
      <Card
        d="flex"
        w={{ base: "100%", md: "95%" }}
        p="1rem"
        height={{ base: "full", md: "40%" }}
        bg="#fff"
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "1rem", md: "10%" }}
          height="full"
          w={"full"}
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <Image
          rounded="md"
            height="full"
            src={user?.profilePic}
            width={{ base: "full", md: "30%" }}
          />
          <Box flex={1}>
            <Text fontSize="20px" fontWeight={600}>
              Full name:
            </Text>
            <Text>{user?.fullName}</Text>
            <Text fontSize="20px" fontWeight={600}>
              Registration number:
            </Text>
            <Text>{user?.registrationNumber}</Text>
            <Text fontSize="20px" fontWeight={600}>
              Level:
            </Text>
            <Text>{user?.department}</Text>
          </Box>
        </Flex>
      </Card>
      <Stack my="1rem" gap="1rem" w={{ base: "100%", md: "95%" }}>
        <Text fontSize={18} > Courses you registered</Text>
        {courses?.map((item, idx) => {
          return (
            <HStack
              key={idx}
              bg="#fff"
              shadow="md"
              rounded="md"
              p="10px"
              justifyContent={"space-between"}
            >
              <Text textTransform="capitalize">{item.courseName}</Text>
              <Text></Text>
              <Link
                as={NavLink}
                to={`/attend-class/${item.courseName}`}
                p="10px"
                bg="green.500"
                rounded="md"
              >
                <FaAnchor fontSize={20} />
              </Link>
            </HStack>
          );
        })} 
      </Stack>
    </Stack>
  );
};

export default index;
