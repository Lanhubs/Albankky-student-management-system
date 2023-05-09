import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../../Components/Templates/Wrapper";

const Students = () => {
  const [student, setStudents]=React.useState()
  React.useEffect(()=>{
    
  },[])
  return (
    <Wrapper>
      <Stack my="2rem" flexDirection="column" gap="1rem" mx="auto" w="90%">
        <HStack bg="#fff" shadow="base" justfyContent="space-between">
          <Text>profile picture</Text>
          <Text>Student name</Text>
          <Text>Reg No</Text>
          <Text>Department</Text>

          <Text>email</Text>
          <Text>finger print Id</Text>
        </HStack>
        <HStack bg="#fff" shadow="base" justfyContent="space-between"></HStack>
      </Stack>
    </Wrapper>
  );
};

export default Students;
