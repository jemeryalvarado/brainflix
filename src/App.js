import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.js"
import VideoUpload from "./pages/VideoUpload/VideoUpload.js"; // Import VideoUpload component


import NavBar from "./components/NavBar/NavBar.js";

function App() {

  return (
    <BrowserRouter>
      <main>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:id" element={<Homepage />} />
        <Route path="/upload" element={<VideoUpload />} />


    </Routes>
      </main>
    </BrowserRouter>

);
}


export default App;
