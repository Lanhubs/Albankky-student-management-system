import { Box, HStack, Stack, Text, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { FLEX } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import { Cus_File_Upload_Input } from "../../Components/Utils/Cus_Inputs";
import { UserState } from "../../Components/Templates/UserProvider";
import Profile from "../Profile"
const Home = () => {
  const {token, user} = UserState();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    
    fetch("/api/get-students", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(user)
  return (
    <Wrapper>
      <Box py="2rem" px="2rem" display={FLEX} flexDir="column">
        <Flex
          rowGap="1rem"
          flexWrap="wrap"
          height="full"
          justifyContent={{ base: "space-between", md: "" }}
        >
        {/* {user.roles.includes("admin")?(
          <>
          {data.map((item, idx) => (
            <Box
              key={idx}
              width={{ base: "45%", md: "23%", lg: "20%" }}
              backgroundColor={item.bgColor}
              bg={item.bgColor}

              rounded={"md"}
              height="120px"
              p="1.5rem"
              d="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="10%"
              shadow="md"
              textTransform="capitalize"
            >
              <Text fontSize={20}>{item.dept}</Text>
              <Text fontSize={30}> {item.amount}</Text>
              
            </Box>
          ))}
          </>
        ):(
          <> */}

          <Profile />
          
          {/* </>
        )} */}
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Home;
