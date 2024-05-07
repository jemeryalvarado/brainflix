import "./VideoUpload.scss";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import publish from "../../assets/Icons/publish.svg";

const VideoUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [uploadSuccess, setUploadSuccess] = useState(false);
  const goSuccess = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: formData.title,
      description: formData.description,
      image: videoThumbnail,
    };

    axios
      .post("http://localhost:8000/videos", postData)
      .then((response) => {
        setFormData({
          title: "",
          description: "",
        });

        setUploadSuccess(true);
        goSuccess("/success");
      })
      .catch((error) => {
        console.log("error uploading video:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="break"></div>
      <div className="video-upload">
        <h2 className="video-upload__title">Upload Video</h2>
        <section className="video-thumbnail-form__wrapper">
          <div className="video-upload__thumbnail">
            <h3 className="video-upload__thumbnail-title">VIDEO THUMBNAIL</h3>
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="video-upload__thumbnail-image"
            />
            <div className="break-2"></div>
          </div>
          <form className="video-upload__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">TITLE YOUR VIDEO</label>
              <input
                type="text"
                id="video-title"
                name="title"
                placeholder="Add a title to your video"
                value={formData.title}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group">
              <label className="form-label">ADD A VIDEO DESCRIPTION</label>
              <input
                type="text"
                id="video-description"
                name="description"
                placeholder="Add a description to your video"
                value={formData.description}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="btns">
              <button type="submit" className="btn btn-primary">
                <img className="icon" src={publish} alt="Upload" />
                <p className="btn-primary-name">Publish</p>
              </button>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default VideoUpload;
