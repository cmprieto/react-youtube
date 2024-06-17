import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/react-youtube">
        <img src={logo} className="navbar--logo" alt="logo" />
      </Link>

      <div className="navbar--menu">
      <NavLink to="/react-youtube"><button className='navbar--menu--button'><p>Home</p></button></NavLink>

      <NavLink to="/react-youtube/history"><button className='navbar--menu--button'><p>History</p></button></NavLink>

      <NavLink to="/react-youtube/videodetail/"><button className='navbar--menu--button'><p>Player</p></button></NavLink>

      <NavLink to="/react-youtube/favorites/"><button className='navbar--menu--button'><p>Favorites</p></button></NavLink>
      </div>
    </div>
  );
};

export default NavBar;
