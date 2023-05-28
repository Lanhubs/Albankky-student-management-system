import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  createStandaloneToast,
} from "@chakra-ui/react";
import React from "react";
import { MdFingerprint } from "react-icons/md";
import { COOKIE_SECRET, FLEX } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import Authenticate_user_for_attendance from "../../Components/Utils/Authenticate_user_for_attendance";
import { useNavigate, useParams } from "react-router-dom";
import { UserState } from "../../Components/Templates/UserProvider";
import axios from "axios";
import Cookies from "js-cookie";
import Student from "../../Components/Utils/Student";
// import UserImg from "../../assets/Users/user.png"
const Attendance = () => {
  const [active, setActive] = React.useState();

  const params = useParams();
  const navigate = useNavigate();
  const { user, token, isAdmin, setIsAdmin } = UserState();
  

  const [admin, setAdmin] = React.useState(false);
  const [attendances, setAttendances] = React.useState();
  const { toast, ToastContainer } = createStandaloneToast();
  React.useEffect(() => {
    const user = JSON.parse(Cookies.get(COOKIE_SECRET))
    if (user.data.roles.includes("admin")) {
      setAdmin(true);
      axios
        .get("/api/attendance", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((data) => {
          console.log(data.data);
          setAttendances(data.data.students);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setActive(user.data)
      axios
        .get(`/api/mark-attendance?course=${params.course}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((data) => {
          
          setAttendances(data.data.students);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  return (
    <Wrapper>
      {admin ? (
        <>
          <Stack
            w="100%"
            height="100%"
            p="1.5rem"
            d={FLEX}
            flexDir="column"
            gap="1rem"
            columnGap="1rem"
          >
            {attendances?.map((item, idx) => (
              <Student
                key={idx}
                profilePic={item.student.profilePic}
                fullName={item.student.fullName}
                department={item.student.department}
                regNo={item.student.registrationNumber}
                email={item.student.email}
              />
            ))}
          </Stack>
        </>
      ) : (
        <>
          <Box
            p={{ base: "5%", md: "5%" }}
            pos="relative"
            w="100%"
            height="100%"
          >
            <Heading fontSize={25}>Students in Attendance</Heading>
            <Heading fontSize={20} my="1rem">
              Course name: {params?.course}
            </Heading>

            <Flex
              rowGap="1rem"
              columnGap="1rem"
              w="full"
              h="full"
              flexWrap={{ base: "wrap", md: "wrap", lg: "wrap" }}
            >
              {attendances?.map((item, idx) => {
                return (
                  <Box
                    shadow="md"
                    rounded={"lg"}
                    p="1rem"
                    bg="#fff"
                    padding="1rem"
                    height={"250px"}
                    w={{ base: "47%", md: "290px" }}
                    display={FLEX}
                    columnGap="1rem"
                    key={idx}
                    flexDir="column"
                    // justifyContent="space-between"
                    gap="1rem"
                    alignItems={"center"}
                  >
                    <Avatar
                      width="60px"
                      src={item.student.profilePic}
                      height="60px"
                    />
                    <Text>{item.student.fullName}</Text>
                    <Text>{item.student.registrationNumber}</Text>
                    {active.registrationNumber ===
                    item.student.registrationNumber ? (
                      <Authenticate_user_for_attendance course ={params.course}>
                        <Button >Attend class</Button>
                      </Authenticate_user_for_attendance>
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </>
      )}
    </Wrapper>
  );
};

export default Attendance;
