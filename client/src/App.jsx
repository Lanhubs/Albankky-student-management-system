import { useState } from "react";

import "./App.css";
import Wrapper from "./Components/Templates/Wrapper";
import Home from "./pages/Home";
import Students from "./pages/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrol from "./pages/Onboarding";
import { Login } from "./pages/Onboarding/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Attendance from "./pages/Attendance";

function App() {
  const onLoaded =(cv)=>{
    console.log("Opencv loaded", cv)
  }
  return (
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/enrol"
              exact
              element={
                <Wrapper>
                  <Enrol />
                </Wrapper>
              }
            />
            <Route path="/signup" exact element={<Enrol />} />

            <Route path="/students" exact element={<Students />} />
            <Route path="/login" exact element={<Login />} />
            <Route
              path="/attend-class/:course"
              exact
              element={<Attendance />}
            />
            <Route path="attendances" element={<Attendance />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
