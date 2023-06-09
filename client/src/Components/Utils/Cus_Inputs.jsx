import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  Menu,
  MenuItem,
  MenuList,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdDeleteOutline, MdOutlineCloudUpload } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FLEX } from "../DATA";

export const Cus_File_Upload_Input = ({ placeholder, handleChange }) => {
  const imageUploadRef = useRef();
  const [imageName, setImageName] = React.useState();
  const [image, setImage] = React.useState();
  return (
    <Box pos="relative">
      <Text
        fontSize={16}
        textTransform="capitalize"
        fontWeight={"500"}
        color="rgba(0, 0, 0, 0.7)"
      >
        upload image
      </Text>
      {image && (
        <>
          <Flex
            rounded={"md"}
            marginY="10px"
            height={"40px"}
            backgroundColor="gray.400"
            alignItems="center"
            padding="10px"
            justifyContent="space-between"
          >
            <Text textTransform="capitalize">delete file</Text>
            <HStack>
              {imageName}-{" "}
              <Text
                as={MdDeleteOutline}
                fontSize={25}
                color="red.400"
                onClick={() => {
                  setImageName(undefined);
                  setImage("");
                }}
              />
            </HStack>
          </Flex>

          <Image
            src={image}
            alt=""
            height={200}
            width={"full"}
            my="5"
            borderRadius={10}
            objectFit="cover"
            overflow="hidden"
          />
        </>
      )}
      <Box
        onClick={() => {
          document.getElementById("fileupload").click();
        }}
        marginTop="1rem"
        borderRadius={10}
        border="2px solid"
        borderColor={"cyan.600"}
        cursor="pointer"
        flexDir={"column"}
        display={FLEX}
        w="full"
        alignItems="center"
        justifyContent="center"
        height="150px"
        width="full"
      >
        <Input
          onChange={({ target: { files } }) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files[0])
      
            fileReader.onload = () => {
              handleChange(fileReader.result);
            };
            files && setImageName(files[0].name);
            // handleChange(files[0]);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }

          }}
          outline={0}
          padding={"10px"}
          as="input"
          id="fileupload"
          w="full"
          placeholder={placeholder}
          type="file"
          accept="image/*"
          ref={imageUploadRef}
          hidden
          fontSize={16}
          fontWeight={"medium"}
          onFocus={() => {}}
          pos="relative"
        />
        <Text color="cyan.500" as={MdOutlineCloudUpload} fontSize={50} />
        <Text textTransform="capitalize" fontSize={18}>
          upload product image
        </Text>
      </Box>
    </Box>
  );
};
export const Cus_Input = ({ placeholder, label, inputType, handleChange }) => {
  return (
    <FormControl flexDir="col" w="full">
      <FormLabel textTransform="capitalize" fontSize={16}>
        {label}
      </FormLabel>

      <Input
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        border="1.5px solid"
        borderColor="green.500"
        borderRadius="10px"
        p="10px"
        height="50px"
        width="full"
        type={inputType}
      />
    </FormControl>
  );
};
export const Password = ({ placeholder, label, inputType, handleChange }) => {
  const [pwdVisibility, setPwdVisibility] = React.useState(false);
  return (
    <FormControl w="full">
      <FormLabel textTransform="capitalize" fontSize={18}>
        {label}
      </FormLabel>

      <InputGroup
        rounded={"md"}
        borderRadius="md"
        border="1.5px solid"
        borderColor="green.500"
        width="full"
      >
        <Input
          width="100%"
          border="none"
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          type={pwdVisibility ? "text" : "password"}
        />
        <Button
          width="10%"
          fontSize={30}
          className=" hover:bg-transparent"
          onClick={() => setPwdVisibility(!pwdVisibility)}
        >
          {pwdVisibility ? (
            <FaEye fontSize={30} />
          ) : (
            <FaEyeSlash fontSize={30} />
          )}
        </Button>
      </InputGroup>
    </FormControl>
  );
};
export const Cus_Select = (props) => {
  const selector = useRef();
  const [showCourses, setShowCourses] = React.useState(false);

  const options = [
    "Math",
    "Computer Science",
    "computer programming",
    "software architecture and design",
    "software engineering",
    "operating system",
    "Object oriented programming",
    "structural programming",
    "functional programming",
  ];
  return (
    <>
      <Box
        w="full"
        pos="relative"
/*         onMouseOut={() => setShowCourses(false)}
        onMouseLeave={() => setShowCourses(false)} */
        onFocus={() => setShowCourses(true)}

      >
        <FormLabel fontSize="18px" textTransform="capitalize">
          choose courses
        </FormLabel>
        <Input
          border="1.7px solid"
          borderColor="green.500"
          w="full"
          cursor="pointer"
          height="50px"
          placeholder="courses"
          value={props.courses}
          onMouseOut={() => setShowCourses(false)}
          // onMouseLeave={() => setShowCourses(false)}
          onFocus={() => setShowCourses(true)}
          onChange={(e) => props.setCourses(e.target.value)}
        />
        <Box
          w="full"
          m={0}
          p={0}
          pos="absolute"
          display={showCourses ? FLEX : "none"}
          top="5rem"
          zIndex={100}
          bg="#fff"
          flexDir="column"
          my="10px"
          overflowY={"visible"}
          rounded="sm"
        >
          {options.map((item) => (
            <Box
              key={item}
              cursor="pointer"
              p="10px"
              w="full"
              onClick={() => {
                props.setCourses((oldData) => (oldData += "," + item));
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export const Cus_Select_Dept = (props) => {
  const [showDepts, setShowDepts] = React.useState(false);

  return (
    <>
      <Box
        w="full"
        pos="relative"
        onMouseOut={() => setShowDepts(false)}
        onMouseLeave={() => setShowDepts(false)}
      >
        <FormLabel fontSize="18px" textTransform="capitalize">
          {props.label}
        </FormLabel>
        <Input
          border="1.7px solid"
          borderColor="green.500"
          w="full"
          cursor="pointer"
          height="50px"
          placeholder={props.placeholder}
          value={props.department}
          onMouseOut={() => setShowDepts(false)}
          onMouseLeave={() => setShowDepts(false)}
          onChange={(e) => props.setDepartment(e.target.value)}
          onFocus={() => setShowDepts(true)}
        />
        <Box
          w="full"
          shadow="md"
          m={0}
          p={0}
          pos="absolute"
          display={showDepts ? FLEX : "none"}
          top="5rem"
          zIndex={100}
          bg="#fff"
          flexDir="column"
          my="10px"
          overflowY={"visible"}
          rounded="md"
        >
          {props.depts.map((item) => (
            <Box
              key={item}
              cursor="pointer"
              p="10px"
              w="full"
              onClick={() => {
                props.setDepartment(item);
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
