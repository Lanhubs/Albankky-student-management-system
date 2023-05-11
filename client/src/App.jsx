import { useState } from "react";

import "./App.css";
import Wrapper from "./Components/Templates/Wrapper";
import Home from "./pages/Home";
import Students from "./pages/Students";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrol from "./pages/Onboarding";
import { Login } from "./pages/Onboarding/Login";
import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts, { theme } from "./Components/Utils/GlobalStyles";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
    <BrowserRouter>
 
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/enrol" exact element={<Enrol />} />
        <Route path="/students" exact element={<Students />} />
        <Route path="/login" exact element={<Login />} />


      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  );
}

export default App;
