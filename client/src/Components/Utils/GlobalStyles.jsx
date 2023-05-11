import { GlobalStyle, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import T from "";
import React from "react";
const Fonts = () => (
  <Global
    styles={`
    @font-face {
            font-family: 'Roboto';
            src: url("../../assets/Fonts/Roboto-Black.ttf");
        
        }`}
  />
);

export const theme = extendTheme({
  fonts: {
    roboto: "Roboto",
  },
});

export default Fonts;
