import { Avatar, Box, Card, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { UserState } from "../../Components/Templates/UserProvider";
import Wrapper from "../../Components/Templates/Wrapper";
const index = () => {
  const { user } = UserState();
  const [detail, setDetails] = React.useState();
  React.useEffect(() => {
    fetch("/api/get-student", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }).then(res=>res.json()).then(data=>{
        setDetails(data)
    })
  }, []);
  return (
    <Wrapper>
      <Stack
        bg="#fafafa"
        w="full"
        height={{ base: "full", md: "100vh" }}
        gap="1rem"
      >
        <Flex p="1rem" height={{ base: "full", md: "40%" }}>
          <HStack gap="10%" height="full" w={{ base: "40%", md: "full" }}>
            <Avatar rounded="md" width={{ base: "full", md: "40%" }} />
            <Box flex={1}>
              <Heading>Full name:</Heading>
              <Text>
                {detail?.fullName}
              </Text>
              <Heading>Registration number:</Heading>
              <Text>
                {detail?.registrationNumber}
              </Text>
              <Heading>Full name:</Heading>
              <Text>
                {detail?.fullName}
              </Text>
            </Box>

          </HStack>
        </Flex>
        <Card shadow="md">
        <CardBody>

        </CardBody>
        </Card>
      </Stack>
    </Wrapper>
  );
};

export default index;
