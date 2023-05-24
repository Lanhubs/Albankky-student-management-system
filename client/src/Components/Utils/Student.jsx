import { HStack, Img, Text } from "@chakra-ui/react";
import React from "react";

const Student = (props) => {
  return (
    <HStack
      bg="white"
      justifyContent={"space-between"}
     
      p="1rem"
      rounded="md"
      alignItems={"center"}
      shadow="md"
      w="full"
    >
      <Img src={props?.profilePic} rounded="full" width="50px" height="50px" />
      <Text fontSize={18} fontWeight="medium">
        {props?.fullName}
      </Text>
      <Text>{props.department}</Text>
      <Text>{props?.regNo}</Text>
    </HStack>
  );
};

export default Student;
