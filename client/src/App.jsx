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
import AttendLecture from "./pages/Attendance";
function App() {
  return (
    <ChakraProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/enrol" exact element={<Enrol />} />
          <Route path="/students" exact element={<Students />} />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/attend-class/:course"
            exact
            element={<AttendLecture />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
