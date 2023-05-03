import { Stack } from '@chakra-ui/react'
import React from 'react'
import Wrapper from '../../Components/Templates/Wrapper'
import { Cus_File_Uploaf_Input } from '../../Components/Utils/Cus_Inputs'

const Home = () => {
  const [profilePic, setProfilePic] = React.useState()
  const [firstName, setFirstName ] = React.useState()
  const [lastName, setLastName ] = React.useState()
  const [regNo, setRegNo ] = React.useState()
  const [dateOfBirth, setDateOfBirth ] = React.useState()
  const [fingerPrintId, setFingerPrintId ] = React.useState()

  return (
    <Wrapper>
    <Stack gap="7%" flexDirection={{sm:"column", md: "row"}} alignItem="center">
      <Cus_File_Uploaf_Input handleChange={setProfilePic}/>
      

    </Stack>
        
    </Wrapper>
  )
}

export default Home