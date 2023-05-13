import { Box, HStack, Stack, Text, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { MOCK_STUDENTS_DETAILS } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import { Cus_File_Uploaf_Input } from "../../Components/Utils/Cus_Inputs";

const Home = () => {
  return (
    <Wrapper>
      <Box py="2rem">
        <Flex  rowGap="1rem" flexWrap="wrap" columnGap={"1rem"}>
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
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Home;
