import { Box, HStack, Stack, Text, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { COOKIE_SECRET, FLEX } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import { Cus_File_Upload_Input } from "../../Components/Utils/Cus_Inputs";
import UserProvider, {
  Context,
  UserState,
} from "../../Components/Templates/UserProvider";
import Profile from "../Profile";
import Cookies from "js-cookie";
import axios from "axios";
import Student from "../../Components/Utils/Student";
const Home = () => {
  const { user } = UserState();
  const [details, setDetails] = React.useState();
  const [isAdmin, setIsAdmin] = React.useState(false);
  React.useEffect(() => {
    const user = JSON.parse(Cookies.get(COOKIE_SECRET));

    if (user.data.roles.includes("admin")) {
      setIsAdmin(true);
      axios.get("/api/get-students", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((studs) => {
         
        setDetails(studs.data.students)

          console.log(studs)

        })
        .catch((e) => console.log(e));

    }
  }, [user]);
  return (
    <>
      <Wrapper>
        <Box py="2rem" px="2rem" display={FLEX} flexDir="column">
          <Flex
            rowGap="1rem"
            flexWrap="wrap"
            height="full"
            justifyContent={{ base: "space-between", md: "" }}
          >
            {isAdmin ? (
              <>
                {details?.map((item, idx) => (
                 <Student key={idx} profilePic={item.profilePic} fullName={item.fullName} department={item.department} regNo={item.registrationNumber}/>
                ))} 
              </>
            ) : (
              <Profile />
            )}
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};

export default Home;
