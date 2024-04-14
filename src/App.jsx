import React, { useState } from "react"; 
import "../src/styles/App.css";
import Library from "./pages/Library";
import Card from "./components/Temp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import BottomStrip from "./components/BottomStrip";

function App() {
  const [progress, setProgress] = useState(0);
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library progressUpdater={updateProgress} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/apiTest" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <BottomStrip progress={progress} />
    </>
  );
}

export default App;
