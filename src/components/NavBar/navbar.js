import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg"
import avatar from "../../assets/Images/Mohan-muruge.jpg"
import "./navbar.scss"

export default function NavBar() { 
    return (
        <nav className="navbar">
        <img src= {brainflixlogo} className="navbar-logo">
        </img>
        <form>
            <input type= 'text' placeholder="search" className='navbar-search' ></input>
        <img src={avatar} alt="avatar" className="navbar-avatar"/>
            <button className="navbar-button">Upload</button>
        </form>
        </nav>

)
} 