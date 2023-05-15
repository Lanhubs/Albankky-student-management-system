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

export const Cus_File_Uploaf_Input = ({ placeholder, handleChange }) => {
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
            // padding="10px"
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
        onClick={(event) => {
          document.getElementById("fileupload").click();
        }}
        marginTop="1rem"
        borderRadius={10}
        border="2px solid"
        borderColor={"cyan.600"}
        cursor="pointer"
        flexDir={"column"}
        display={FLEX}w="full"
        alignItems="center"
        justifyContent="center"
        height="150px"
        width="full"
      >
        <Input
          onChange={({ target: { files } }) => {
            files && setImageName(files[0].name);
            handleChange(files[0]);
            console.log(files[0]);
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
        <Text textTransform="capitalize" fontSize={18}>upload product image</Text>
      </Box>
    </Box>
  );
};
export const Cus_Input = ({ placeholder, label, inputType, handleChange }) => {
  return (
    <FormControl flexDir="col" w="full">
      <FormLabel textTransform="capitalize" fontSize={16}>{label}</FormLabel>

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
      <FormLabel textTransform="capitalize" fontSize={18}>{label}</FormLabel>

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
          className=" hover:bg-transparent"
          onClick={() => setPwdVisibility(!pwdVisibility)}
        >
          {pwdVisibility ? (
            <FaEye fontSize={20} />
          ) : (
            <FaEyeSlash fontSize={20} />
          )}
        </Button>
      </InputGroup>
    </FormControl>
  );
};
export const Cus_Select = () => {
  const selector = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [courses, setCourses] = React.useState();
  selector.current.click(() => {
    setCourses((value) => {
      value += selector.current.textContent;
    });
  });
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
      <FormControl>
        <FormLabel>choose courses</FormLabel>
        <Input
          value={courses}
          onFocus={isOpen}
          w="full"
          placeholder="courses"
          onChange={(e) => setCourses(e.target.value)}
        />
      </FormControl>
      <Menu onOpen={onOpen} onClose={onClose} placement="bottom">
        <MenuList>
          {options.map((item, idx) => (
            <MenuItem
              ref={selector}
              p="10px"
              onClick={(e) => {
                setCourses((value) => {
                  value += "," + e.currentTarget.textContent;
                });
                // onClose()
              }}
              key={idx}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
