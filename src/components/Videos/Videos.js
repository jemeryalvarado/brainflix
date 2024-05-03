import "./Videos.scss";
import { Link } from "react-router-dom";

function VideoList({ allVideos }) {
  return (
    <>
      <h2>NEXT VIDEOS</h2>
      {allVideos.map((video) => (
        <>
          <div className="videos" key={video.id}>
            <section
              className="videos-list"
              key={video.id}
              
            >
          <Link to={`/video/${video.id}`} className="videos-list">
              <img src={video.image} alt="keyframe" width={96} />

              <div className="videos-list-info">
                <div className="videos-title" key={video.id}>
                  {video.title}
                </div>
                <span> {video.channel}</span>
              </div>
            </Link>
            </section>

          </div>
        </>
      ))}
    </>
  );
}

export default VideoList;
