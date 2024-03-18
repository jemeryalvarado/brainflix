import './App.scss'
import { useState } from "react";

import NavBar from './components/NavBar/navbar.js'
import Hero from './components/Hero/Hero.js';
import Description from "./components/Description/Description.js";
import Videos from "./components/Videos/Videos.js";
import Comments from "./components/Comments/Comments.js"
import details from './Data/video-details.json'
import allVideos from './Data/videos.json'


function App() {

  
  const[current, setCurrent]=useState(0);
  
  const videoClick = (index)=>{ 

   let invexvalue= allVideos.indexOf(index)
    console.log(typeof index)
    console.log( invexvalue)
    setCurrent(invexvalue)

  }
  


  
  return (
    <body>
     <NavBar></NavBar>
     <Hero details={details[current]}></Hero>
     <Description details={details[current]}></Description>
      <Comments details={details[current]}></Comments>
     <Videos allVideos= {allVideos} videoClick= {videoClick}></Videos>
 </body>
  );
}

export default App;
