import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg"
import avatar from "../../assets/Images/Mohan-muruge.jpg"
import uploadArrow from '../../assets/Icons/upload.svg'
import "./navbar.scss"

export default function NavBar() { 
    return (
        <nav className="navbar">
        <img src= {brainflixlogo} className="navbar-logo">
        </img>
        <form className="navbar-form">
            <div className="navbar-search-box">
            <input type= 'text' placeholder="Search" className='navbar-search' ></input>
        <img src={avatar} alt="avatar" className="navbar-avatar"/>
        </div>
            <button className="navbar-button">UPLOAD</button>
        </form>
        </nav>

)
} 