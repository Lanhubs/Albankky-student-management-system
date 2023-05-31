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
  const [markedAttendance, setMarkedAttendance] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  const [attendances, setAttendances] = React.useState();

  const { toast, ToastContainer } = createStandaloneToast();
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem(COOKIE_SECRET));
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
      setActive(user.data);
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
  // check if marked attendance
  /*  React.useEffect(() => {

    fetch(`/api/marked-attendance?course=${params.course}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
      console.log(data)
      })
      .catch((e) => console.log(e));
  }, []); */
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
            <Heading fontSize={25} textAlign={{ base: "center", md: "left" }}>
              Students in Attendance
            </Heading>
            <Heading
              fontSize={20}
              my="1rem"
              textAlign={{ base: "center", md: "left" }}
            >
              Course name: {params?.course}
            </Heading>

            <Flex
              rowGap="1rem"
              columnGap="1rem"
              alignItems={{ base: "center", md: "" }}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "" }}
              w="full"
              h="full"
              flexWrap={{ base: "", md: "wrap", lg: "wrap" }}
            >
              {attendances?.map((item, idx) => {
                return (
                  <Box
                    shadow="md"
                    rounded={"lg"}
                    p="1rem"
                    bg="#fff"
                    padding="1rem"
                    height={{ base: "270px", md: "250px" }}
                    w={{ base: "90%", md: "290px" }}
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
                      src={item.student?.profilePic}
                      height="60px"
                    />
                    <Text>{item.student?.fullName}</Text>
                    <Text>{item.student?.registrationNumber}</Text>
                    <>
                      {markedAttendance ? (
                        <></>
                      ) : markedAttendance ? (
                        ""
                      ) : (
                        <>
                          {active.registrationNumber ===
                          item.student?.registrationNumber ? (
                            <Authenticate_user_for_attendance
                              attendanceStatus={markedAttendance}
                              handleMarkedAttendance={setMarkedAttendance}
                              course={params.course}
                            >
                              <Button>Attend class</Button>
                            </Authenticate_user_for_attendance>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </>
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
