import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UploadSuccess.scss"
import "../Homepage/Homepage.scss"

function UploadSuccess (){

    return(
        <div className="video-sucess">
            <h2>Video Successfully Uploaded</h2>

            <Link to = "/" className="btn btn-primary"> Go to Homepage</Link>
        </div>
    );
};
export default UploadSuccess;