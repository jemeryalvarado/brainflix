import "./Videos.scss";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function VideoList({ allVideos }) {
  return (
    <>
      <h2>NEXT VIDEOS</h2>
      {allVideos.map((video) => (
        <div className="videos" key={uuidv4()}>
          <Link to={`/video/${video.id}`} className="videos-list">
            <img src={video.image} alt="keyframe" width={96} />

            <div className="videos-list-info">
              <div className="videos-title">{video.title}</div>
              <span> {video.channel}</span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default VideoList;
