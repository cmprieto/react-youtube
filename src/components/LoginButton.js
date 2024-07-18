import { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import userblack from "../assets/icon/user-black72.png";
import userwhite from "../assets/icon/user-white72.png";
import { useLocalStorage } from "@uidotdev/usehooks";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [theme] = useLocalStorage("theme", "");
  return (
    <Fragment>
      {!isAuthenticated ? (
        theme === "" ? (
          <div className="loginButton--noAuth">
            {" "}
            <img
              src={userwhite}
              width={32}
              className="loginButton"
              onClick={() => loginWithRedirect()}
              alt="icono"
            />
            <button
              className={`loginButtonisAuth--button${theme}`}
              onClick={() => loginWithRedirect()}
            >
              <p>Log In</p>
            </button>
          </div>
        ) : (
          <div className="loginButton--noAuth--white">
            {" "}
            <img
              src={userblack}
              width={32}
              onClick={() => loginWithRedirect()}
              alt="icono"
            />
            <button
              className={`loginButtonisAuth--button${theme}`}
              onClick={() => loginWithRedirect()}
            >
              <p>Log In</p>
            </button>
          </div>
        )
      ) : (
        <div className="loginButtonisAuth">
          <img src={user.picture} />
          <button
            className={`loginButtonisAuth--button${theme}`}
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin + "/react-youtube/",
                },
              })
            }
          >
            <p>Log Out</p>
          </button>
        </div>
      )}{" "}
    </Fragment>
  );
};

export default LoginButton;
