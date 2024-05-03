import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero.js";
import Description from "../../components/Description/Description.js";
import Videos from "../../components/Videos/Videos.js";
import Comments from "../../components/Comments/Comments.js";
import "./Homepage.scss"


const Home = () => {
    const { id } = useParams();
    const defaultVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8'; // Default video ID
    const [current, setCurrent] = useState(id || defaultVideoId);
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);
    const jlaKey = "c5f082c8-8e98-4245-8513-1866d16d5c51"; 
    const navigate = useNavigate();
    
    useEffect(() => {
        setCurrent(id || defaultVideoId); // Set current based on the URL parameter or defaultVideoId
        
        axios
            .get(`https://project-2-api.herokuapp.com/videos/${id || defaultVideoId}?api_key=${jlaKey}`)
            .then((response) => {
                setVideoDetails(response.data);
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
    }, [id]);
  
    const videoClick = (id) => {
        setCurrent(id);
        navigate(`/video/${id}`);
    };
    
    return (
        <>
            {videoDetails && (
                <section>
                    <Hero current={current} details={videoDetails} /> 
                    <div>
                        <Description current={current} details={videoDetails} />
                        <Comments current={current} details={videoDetails} />
                    </div>
                    <Videos allVideos={relatedVideos} videoClick={videoClick} />
                </section>
            )}
        </>
    );
};

export default Home;
