import { Link } from "react-router-dom";
import "./UploadSuccess.scss";

function UploadSuccess() {
  return (
    <div className="video-success">
      <h2>Video Successfully Uploaded !</h2>

      <Link to="/" className="video-wrapper">
        {" "}
        <button className="video-button">GO TO HOMEPAGE</button>
      </Link>
    </div>
  );
}
export default UploadSuccess;
