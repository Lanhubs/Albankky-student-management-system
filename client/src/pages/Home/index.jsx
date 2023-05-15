import { Box, HStack, Stack, Text, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { FLEX, MOCK_STUDENTS_DETAILS } from "../../Components/DATA";
import Wrapper from "../../Components/Templates/Wrapper";
import { Cus_File_Uploaf_Input } from "../../Components/Utils/Cus_Inputs";

const Home = () => {
  return (
    <Wrapper>
      <Box py="2rem" px="2rem" display={FLEX} flexDir="column">
        <Flex rowGap="1rem" flexWrap="wrap"  height="full" justifyContent={{base:"space-between", md: ""}}>
          {MOCK_STUDENTS_DETAILS.map((item, idx) => (
            <Box
              key={idx}
              width={{ base: "45%", md: "23%", lg: "20%" }}
              backgroundColor={item.bgColor}
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
              {/* <Text>{item.}</Text> */}
            </Box>
          ))}
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Home;
