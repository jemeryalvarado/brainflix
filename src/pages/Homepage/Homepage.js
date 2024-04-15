import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero.js";
import Description from "../../components/Description/Description.js";
import Videos from "../../components/Videos/Videos.js";
import Comments from "../../components/Comments/Comments.js";







const Home = () => {
    const { id } = useParams();
    const [current, setCurrent] = useState([0].id);
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);
    const jlaKey = "c5f082c8-8e98-4245-8513-1866d16d5c51"; 
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${jlaKey}`)
        .then((response) => {
          setVideoDetails(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error fetching video details:", error);
        });
        
      axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${jlaKey}`)
      .then((response) => {
          setRelatedVideos(response.data.filter((video) => video.id !== id));
        })
        .catch((error) => {
            console.error("Error fetching related videos:", error);
        });
    }, []);
  
    const videoClick = (id) => {
      setCurrent(id);
      navigate(`/video/${id}`);
    };
    
    return (
        <>
        {videoDetails && (
            <>
              <section>
            <Hero current={current} details={videoDetails} /> 
              <div>
            <Description current={current} details={videoDetails} />
            <Comments current={current} details={videoDetails} />
            </div>
            <Videos allVideos={relatedVideos} videoClick={videoClick} />
            </section>
          </>
        )}
      </>
    );
};

export default Home;
// export default function Home() {
//     const { id } = useParams(); // Extract the id from the URL
//     const [current, setCurrent] = useState(id || details[0].id); 
//   const listMinusOne = allVideos.filter((item) => item.id !== current);
//   const setListMinusOne = listMinusOne.filter((item) => item.id !== current);
//   const [list, setList] = useState(listMinusOne);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id && id !== current) {
//       setCurrent(id);
//       setList(setListMinusOne);
//     }
//   }, [id]); 
//   const videoClick = (id) => {
//     setCurrent(id);
//     navigate(`/video/${id}`); // Update URL with the new video id

//     // removes it but needs a double click
//     setList(setListMinusOne);
// };

// return(
//     <>
//     <Hero current={current} details={details}></Hero>
//         <Description current={current} details={details}></Description>
//         <Comments current={current} details={details}></Comments>
//         <Videos allVideos={list} videoClick={videoClick}></Videos>
//         </>
// )

// };