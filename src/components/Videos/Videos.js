import "./Videos.scss";

function VideoList({ allVideos, videoClick }) {
  return (
    <>
      <h2>NEXT VIDEOS</h2>
      {allVideos.map((video) => (
        <>
          <div className="videos">
            <section
              className="videos-list"
              key={video.id}
              onClick={() => videoClick(video.id)}
            >
              <img src={video.image} alt="keyframe" height={64}/>

              <div className="videos-list-info">
                <div className="videos-title" key={video.id}>
                  {video.title}
                </div>
                <span> {video.channel}</span>
              </div>
            </section>
          </div>
        </>
      ))}
    </>
  );
}

export default VideoList;
