import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/react-youtube">
        <img src={logo} className="navbar--logo" alt="logo" />
      </Link>
      <NavLink to="/react-youtube"><button className='navbar--button'><p>Home</p></button></NavLink>
    </div>
  );
};

export default NavBar;
