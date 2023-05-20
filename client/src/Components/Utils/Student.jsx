import { HStack, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Student = (props) => {
  return (
    <HStack bg="whiteAlpha.100" rounded="sm" p="10px" alignItems={"center"}>
        <Img src={props?.profilePic} rounded="full" width="50px" height="50px"  />
        <Text>
            {props?.fullName}
        </Text>
        <Text>
        {props.department}
        </Text>
        
    </HStack>
  )
}

export default Student