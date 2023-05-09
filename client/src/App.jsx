import { useState } from "react";

import "./App.css";
import Wrapper from "./Components/Templates/Wrapper";
import Home from "./pages/Home";
import Students from "./pages/Students";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrol from "./pages/Onboarding";
import { Login } from "./pages/Onboarding/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/enrol" exact element={<Enrol />} />
        <Route path="/students" exact element={<Students />} />
        <Route path="/login" exact element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
