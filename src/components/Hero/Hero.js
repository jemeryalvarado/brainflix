import VideoList from "../Videos/Videos";
import { useState } from "react";



export default function Hero({details}) { 
  
    return (
        <div>
            <video controls poster={details.image} >
                <source src={details.video} type="video/mp4" ></source></video> 
        </div>

)
} 