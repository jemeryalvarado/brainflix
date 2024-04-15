import VideoList from "../Videos/Videos";
import { useState } from "react";
import "./Hero.scss";

// export default function Hero({ current, details }) {
//   let info = (id) => {
//      return details.find(item => item.id === id);

//   };
//   const display = info(current)
  
//   return (
//     <div className="video">
//       <video controls poster={display.image}>
//         <source src={display.video} type="video/mp4"></source> 
        
//       </video>

//     </div>
//   );
// }

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