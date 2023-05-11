import { Box, HStack, Stack, Text, Card } from "@chakra-ui/react";
import React from "react";
import { MOCK_STUDENTS_DETAILS } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import { Cus_File_Uploaf_Input } from "../../Components/Utils/Cus_Inputs";

const Home = () => {
  return (
    <Wrapper>
      <Box w="full" m="1rem" p="2rem" ml="25%" bg="cyan.300" bgColor="cyan.300">
        <HStack w="full" width="full" gap="3%">
          {MOCK_STUDENTS_DETAILS.map((item, idx) => (
            <Box
              key={idx}
              width={{ base: "45%", md: "23%", lg: "23%" }}
              backgroundColor={item.bgColor}
              rounded={"md"}
              p="1rem"
              d="flex"
              flexDir="column"
              shadow="md"
              textTransform="capitalize"
            >
              <Text>{item.dept}</Text>
              <Text> {item.amount}</Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </Wrapper>
  );
};

export default Home;
