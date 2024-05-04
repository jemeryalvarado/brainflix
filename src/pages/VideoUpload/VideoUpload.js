import "./VideoUpload.scss";
import videoUpload from '../../assets/Images/Upload-video-preview.jpg'

const VideoUpload = () => {
  return (
    <div className="video-upload">
      <h2 className="video-upload__title">Upload Video</h2>
      <div className="video-upload__thumbnail">
        <h3 className="video-upload__thumbnail-title">VIDEO THUMBNAIL</h3>
        <img
          src={videoUpload}
          alt="Video Thumbnail"
          className="video-upload__thumbnail-image"
        />
      </div>
      <form className="video-upload__form">
        <div className="form-group">
          <label  className="form-label">
            TITLE YOUR VIDEO
          </label>
          <input
          type="text"
            id="video-title"
            name="video-title"
            placeholder="Add a title to your video"
          ></input>
        </div>
        <div className="form-group">
          <label  className="form-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            id="video-description"
            name="video-description"
            placeholder="Add a description to your video"
          ></input>
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