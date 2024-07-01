import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useUserContext } from "../providers/UserProvider";
import { useState } from "react";

const NavBar = () => {
  const { i,setI } = useUserContext();

  const handleKey = () => {
    i < 2 ? setI((prevState) => prevState + 1) : setI(0);
  };

  return (
    <div className="navbar">
      <Link to="/react-youtube">
        <img src={logo} className="navbar--logo" alt="logo" />
      </Link>
      <div className="navbar--menu">
        <NavLink to="/react-youtube/history">
          <button className="navbar--menu--button">
            <p>History</p>
          </button>
        </NavLink>
        <NavLink to="/react-youtube/videodetail/">
          <button className="navbar--menu--button">
            <p>Player</p>
          </button>
        </NavLink>
        <NavLink to="/react-youtube/channel/">
          <button className="navbar--menu--button">
            <p>Channel</p>
          </button>
        </NavLink>
        <NavLink to="/react-youtube/favorites/">
          <button className="navbar--menu--button">
            <p>Favorites</p>
          </button>
        </NavLink>
        <button
          type="button"
          className="navbar--menu--button"
          onClick={handleKey}
        >
          <p>Reset Key</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
