import "./VideoUpload.scss";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import publish from "../../assets/Icons/publish.svg";

const VideoUpload = () => {
  return (
    <div className="video-upload">
      <h2 className="video-upload__title">Upload Video</h2>
      <div className="video-upload__thumbnail">
        <h3 className="video-upload__thumbnail-title">VIDEO THUMBNAIL</h3>
        <img
          src={videoThumbnail}
          alt="Video Thumbnail"
          className="video-upload__thumbnail-image"
        />
      </div>
      <form className="video-upload__form">
        <div className="form-group">
          <label className="form-label">TITLE YOUR VIDEO</label>
          <input
            type="text"
            id="video-title"
            name="video-title"
            placeholder="Add a title to your video"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">ADD A VIDEO DESCRIPTION</label>
          <input
            id="video-description"
            name="video-description"
            placeholder="Add a description to your video"
          ></input>
        </div>
      </form>
      <div className="btns">
        <button type="submit" className="btn btn-primary">
          <img class="icon" src={publish} alt="Upload" />
          <p className="btn-primary-name">Publish</p>
        </button>

        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default VideoUpload;
