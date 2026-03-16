import React from "react"; 
import "../src/styles/App.css";
import Library from "./pages/Library";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import BottomStrip from "./components/BottomStrip";
import { PlayerProvider, usePlayer } from "./context/PlayerContext";
import songs from "./assets/songs";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { currentSongIndex } = usePlayer();
  const showPlayer = currentSongIndex !== null;

  return (
    <div id="root-container" className={`${isCollapsed ? "collapsed" : ""} ${!showPlayer ? "no-player" : ""}`}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      {showPlayer && <BottomStrip />}
    </div>
  );
};

function App() {
  return (
    <PlayerProvider songs={songs}>
      <MainLayout />
    </PlayerProvider>
  );
}




export default App;

