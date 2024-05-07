import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.js";
import VideoUpload from "./pages/VideoUpload/VideoUpload.js";
import UploadSuccess from "./pages/UploadSuccess/UploadSuccess.js";

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
          <Route path="/success" element={<UploadSuccess />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
