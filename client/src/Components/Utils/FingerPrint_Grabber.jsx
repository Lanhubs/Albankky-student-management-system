import { Box, Button, Code, Image, Spinner, Text } from "@chakra-ui/react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import React from "react";
import FingerprintScanner, {
  getFingerprint,
  getRawFingerprint,
} from "react-fingerprint";
import { MdFingerprint, MdOutlineFingerprint } from "react-icons/md";
import { FLEX } from "../DATA";

const FingerPrint_Grabber = ({ setFingerPrintId }) => {
  const [fingerP, setFingerP] = React.useState();

  const { isLoading, error, data } = useVisitorData();
  const handleScan = async () => {
    // set(true);
    try {
      setFingerP(data.visitorFound && data.visitorId);
      setFingerPrintId(data.visitorFound && data.visitorId);
    } catch (e) {
      console.log(error);
    }
  };

  return (
    <Box w="full" py="1rem">
      <Box
        w="full"
        height="150px"
        display={FLEX}
        alignItems="center"
        justifyContent="center"
        border="1.7px solid"
        borderColor="green.500"
      >
        
          <Text m="auto" color={fingerP ? "green.400" : "blackAlpha.600"}>
            {isLoading ? <Spinner /> : <MdFingerprint fontSize={50} />}
          </Text>
      
      </Box>
      <Button
        onClick={handleScan}
        w="full"
        bg="green.600"
        color="#fff"
        mt="1.5rem"
      >
        scan now
      </Button>
    </Box>
  );
};

export default FingerPrint_Grabber;
