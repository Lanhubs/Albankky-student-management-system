import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../../Components/Templates/Wrapper";

const Students = () => {
  const [student, setStudents] = React.useState();
  React.useEffect(() => {
    fetch("/api/students", {
      headers: {
        // "Authorization": `Bearer ${}`
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(e=>console.log(e));
  }, []);
  return (
    <Wrapper>
      <Stack my="2rem" flexDirection="column" gap="1rem" mx="auto" w="90%">
        <HStack bg="#fff" shadow="sm" justfyContent="space-between">
          <Text>profile picture</Text>
          <Text>Student name</Text>
          <Text>Reg No</Text>
          <Text>Department</Text>

          <Text>email</Text>
          <Text>finger print Id</Text>
        </HStack>
        <HStack bg="#fff" shadow="sm" justfyContent="space-between">
          <Avatar w="60px" height="60px" />
          <Text>Muhammed habeeb Olanrewaju</Text>
        </HStack>
      </Stack>
    </Wrapper>
  );
};

export default Students;
