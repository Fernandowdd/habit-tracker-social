import './navbar.css';

export default function Navbar({UserName, ProfilePicture}){
    return(
        <nav className="navbar">
        <ul className="navbar-list">
            <li><button href="#">Home</button></li>
            <li><button href="#">Explore</button></li>
            <li><button href="#">Library</button></li>
            <li><button href="#">Comunity</button></li>
            <li>
                <form className="navbar-search">
                    <input type= "text" placeholder = "Search..."/>
                </form>
            </li>
            <li className="navbar-user">
                Welcome, {UserName} 
                <a href="#" className="navbar-profile">
                    <img src={ProfilePicture} alt="Your Profile" />
                </a>
            </li>
        </ul>
        </nav>
    );
}