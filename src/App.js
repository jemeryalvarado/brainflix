import "./App.scss";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar.js";
import Hero from "./components/Hero/Hero.js";
import Description from "./components/Description/Description.js";
import Videos from "./components/Videos/Videos.js";
import Comments from "./components/Comments/Comments.js";
import details from "./Data/video-details.json";
import allVideos from "./Data/videos.json";

function App() {
  const [current, setCurrent] = useState(details[0].id);
  const listMinusOne = allVideos.filter((item) => item.id !== current);
  const setListMinusOne = listMinusOne.filter((item) => item.id !== current);
  const [list, setList] = useState(listMinusOne);

  const videoClick = (id) => {
    setCurrent(id);

    // removes it but needs a double click
    setList(setListMinusOne);
  };

  return (
    <body>
      <NavBar></NavBar>
      <Hero current={current} details={details}></Hero>
      <Description current={current} details={details}></Description>
      <Comments current={current} details={details}></Comments>
      <Videos allVideos={list} videoClick={videoClick}></Videos>
    </body>
  );
}

export default App;
