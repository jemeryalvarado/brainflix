import { Link } from "react-router-dom";
import "./UploadSuccess.scss"

function UploadSuccess (){

    return(
        <div className="video-success">
            <h2>Video Successfully Uploaded</h2>

            <Link to = "/" className="video-success__button"> Go to Homepage</Link>
        </div>
    );
};
export default UploadSuccess;