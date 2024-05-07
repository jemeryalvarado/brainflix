import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import uploadArrow from "../../assets/Icons/upload.svg";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/Icons/search.svg"


export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={brainflixlogo} alt="Brainflix Logo" className="navbar-logo" />
      </Link>

      <form className="navbar-form">
          <input
            type="text"
            placeholder="Search"
            className="navbar-form-searchbox"
          > 
          </input>
          <img src={avatar} alt="avatar" className="navbar-form-avatar" />


          <button  className="navbar-form-bl">
            <div className="navbar-form-bl-wrapper">

            <img className="icon" src={uploadArrow} alt="Upload" />
          <Link to="/upload" className="navbar-form-bl-link">

          
            UPLOAD
        </Link>
        </div>
          </button>
      </form>
    </nav>
  );
}
