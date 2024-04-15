
const VideoUpload = () => {
  return (
    <div className="video-upload">
      <h2 className="video-upload__title">Upload Video</h2>
      <div className="video-upload__thumbnail">
        <h3 className="video-upload__thumbnail-title">Video Thumbnail</h3>
        <img
          src="https://via.placeholder.com/150"
          alt="Video Thumbnail"
          className="video-upload__thumbnail-image"
        />
      </div>
      <form className="video-upload__form">
        <div className="form-group">
          <label htmlFor="video-title" className="form-label">
            Add a title to your video
          </label>
          <textarea
            id="video-title"
            name="video-title"
            className="form-control"
            rows="3"
            placeholder="Enter your video title..."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="video-description" className="form-label">
            Add a description to your video
          </label>
          <textarea
            id="video-description"
            name="video-description"
            className="form-control"
            rows="5"
            placeholder="Enter your video description..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Publish
        </button>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;