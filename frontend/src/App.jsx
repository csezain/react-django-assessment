import { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./pages/Home/Header";
import Navbar from "./components/custom/Navbar";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
