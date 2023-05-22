import { Box, HStack, Stack, Text, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { COOKIE_SECRET, FLEX } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import { Cus_File_Upload_Input } from "../../Components/Utils/Cus_Inputs";
import UserProvider, {
  UserState,
} from "../../Components/Templates/UserProvider";
import Profile from "../Profile";
import Cookies from "js-cookie";
const Home = () => {
  const { token, user } = UserState();
  const [data, setData] = React.useState();

  console.log(user)
  React.useEffect(() => {
    const token = JSON.parse(Cookies.get(COOKIE_SECRET));

    if (user.roles[0] === "admin") {
      fetch("/api/get-students", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  return (
    <UserProvider>
      <Wrapper>
        <Box py="2rem" px="2rem" display={FLEX} flexDir="column">
          <Flex
            rowGap="1rem"
            flexWrap="wrap"
            height="full"
            justifyContent={{ base: "space-between", md: "" }}
          >
            {user.roles[0] === "admin" ? (
              <>
                {data.map((item, idx) => (
                  <Box key={idx} bg="#fff" p="1rem" >{item?.fullName}</Box>
                ))}
              </>
            ) : (
              <Profile />
            )}
          </Flex>
        </Box>
      </Wrapper>
    </UserProvider>
  );
};

export default Home;
