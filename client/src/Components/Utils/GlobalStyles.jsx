import { GlobalStyle, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React from "react"
const Fonts = () => (
  <Global
    styles={`
    @font-face {
            font-family: 'Clash Display';
            src: url("../assets/fonts/clash display.ttf");
        
        }`}
  />
);

export const theme = extendTheme({
    fonts: {
        clash: "Clash Display"
    }
})


export default Fonts;
