import {
  Avatar,
  Box,
  Card,
  Text,
  Flex,
  Link,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";
import { UserState } from "../../Components/Templates/UserProvider";
import Wrapper from "../../Components/Templates/Wrapper";
import { COOKIE_SECRET } from "../../Components/DATA";
import { FaAnchor } from "react-icons/fa";
const index = () => {
  const { user } = UserState();
  const [details, setDetails] = React.useState();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const cookie = JSON.parse(Cookies.get(COOKIE_SECRET));
    const token = cookie.token;
    fetch("/api/get-student", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
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
          <Avatar
            rounded="md"
            height="full"
            width={{ base: "full", md: "40%" }}
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
              Full name:
            </Text>
            <Text>{user?.department}</Text>

          </Box>
        </Flex>
      </Card>
      <Stack my="1rem" gap="1rem" w={{ base: "100%", md: "95%" }}>
        {details?.data?.map((item, idx) => {
          return (
            <HStack key={idx} bg="#fff" shadow="md" rounded="md" p="10px" justifyContent={"space-between"}>
              <Text textTransform="capitalize">{item.courseName}</Text>
              <Text></Text>
              <Link as={NavLink} to={`/attend-class/${item.courseName}`} p="10px" bg="green.500" rounded="md">
                <FaAnchor fontSize={20}/>
              </Link>
            </HStack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default index;
