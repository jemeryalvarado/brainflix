

function VideoList({allVideos, videoClick}) {

 
  return (
    
    <>
      <h2>NEXT VIDEOS</h2>
      {allVideos.map((video) => (
        <>
        <section
        key={video.id}
        onClick={()=> videoClick(video)}
        >
        <img src={video.image} alt="keyframe"  style={{ width: '100px', height: 'auto' }} />
        <div>
        <div key={video.id}>{video.title}</div>
        <span> {video.channel}</span>
        </div>
        </section>
        </>
      ))}
    </>
  );
}

export default VideoList;
