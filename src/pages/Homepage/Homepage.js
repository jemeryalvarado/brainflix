import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero.js";
import Description from "../../components/Description/Description.js";
import Videos from "../../components/Videos/Videos.js";
import Comments from "../../components/Comments/Comments.js";
import "./Homepage.scss";

const Home = () => {
  const { id } = useParams();
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const [current, setCurrent] = useState(id || defaultVideoId);
  const [videoDetails, setVideoDetails] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    setCurrent(id || defaultVideoId);

    axios
      .get(`http://localhost:8000/videos/${id || defaultVideoId}`)
      .then((response) => {
        setVideoDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
      });

    axios
      .get("http://localhost:8000/videos")
      .then((response) => {
        setRelatedVideos(response.data.filter((video) => video.id !== id));
      })
      .catch((error) => {
        console.error("Error fetching related videos:", error);
      });
  }, [id]);

  return (
    <>
      {videoDetails && (
        <section>
          <Hero current={current} details={videoDetails} />
          <div className="wrapper">
            <div className="wrapper-info">
              <Description current={current} details={videoDetails} />
              <Comments current={current} details={videoDetails} />
            </div>
            <div className="wrapper-videos">
              <Videos allVideos={relatedVideos} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
