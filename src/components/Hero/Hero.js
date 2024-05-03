import VideoList from "../Videos/Videos";
import { useState } from "react";
import "./Hero.scss";


const Hero = ({ current, details }) => {
  const display = details;

  return (
    <div className="video">
      <video controls poster={display.image}>
        <source src={display.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;