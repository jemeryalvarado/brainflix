import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.js"
import VideoUpload from "./pages/VideoUpload/VideoUpload.js"; // Import VideoUpload component


import NavBar from "./components/NavBar/NavBar.js";
// import Hero from "./components/Hero/Hero.js";
// import Description from "./components/Description/Description.js";
// import Videos from "./components/Videos/Videos.js";
// import Comments from "./components/Comments/Comments.js";
// import details from "./Data/video-details.json";
// import allVideos from "./Data/videos.json";

function App() {
  // const [current, setCurrent] = useState(details[0].id);
  // const listMinusOne = allVideos.filter((item) => item.id !== current);
  // const setListMinusOne = listMinusOne.filter((item) => item.id !== current);
  // const [list, setList] = useState(listMinusOne);

  // const videoClick = (id) => {
  //   setCurrent(id);

  //   // removes it but needs a double click
  //   setList(setListMinusOne);
  // };

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

{/* <Hero current={current} details={details}></Hero>
<Description current={current} details={details}></Description>
<Comments current={current} details={details}></Comments>
<Videos allVideos={list} videoClick={videoClick}></Videos>
*/}