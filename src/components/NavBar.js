import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useUserContext } from "../providers/UserProvider";
import ThemeMode from './ThemeMode';
import {useLocalStorage} from '@uidotdev/usehooks';

const NavBar = () => {
  const { handleKey } = useUserContext();
  const [theme] = useLocalStorage("theme","");


  return (
    <div className={`navbar${theme}`}>
      <Link to="/react-youtube">
        <img src={logo} className="navbar--logo" alt="logo" />
      </Link>
      <div className="navbar--menu">
        <NavLink to="/react-youtube/history">
          <button className={`navbar--menu--button${theme}`}>
            <p>History</p>
          </button>
        </NavLink>
        <NavLink to="/react-youtube/videodetail/">
          <button className={`navbar--menu--button${theme}`}>
            <p>Player</p>
          </button>
        </NavLink>
        <NavLink to="/react-youtube/channel/">
          <button className={`navbar--menu--button${theme}`}>
            <p>Channels</p>
          </button>
        </NavLink>
        <NavLink to="/react-youtube/favorites/">
          <button className={`navbar--menu--button${theme}`}>
            <p>Favorites</p>
          </button>
        </NavLink>
        <div className={`navbar--menu--separador${theme}`}></div>
        <NavLink to="/react-youtube/profile/">
          <button className={`navbar--menu--button${theme}`}>
            <p>Profile</p>
          </button>
        </NavLink>
        
        <button
          type="button"
          className={`navbar--menu--button--hidden${theme}`}
          onClick={handleKey}
        >
          <p>Key Changer</p>
        </button>
        <div className="navbar--menu--icon"><ThemeMode/></div>
      </div>
    </div>
  );
};

export default NavBar;
