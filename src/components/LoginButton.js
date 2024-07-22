import { Fragment, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import userblack from "../assets/icon/user-black72.png";
import userwhite from "../assets/icon/user-white72.png";
import { useLocalStorage } from "@uidotdev/usehooks";
import {useUserContext} from '../providers/UserProvider';

const LoginButton = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    getAccessTokenWithPopup,
    logout,
  } = useAuth0();
  const { setToken } = useUserContext();
  const [theme] = useLocalStorage("theme", "");

  /*OBTENER TOKEN PARA API YOUTUBE*/

  const getToken = async () => {
    try {
      const token = await getAccessTokenWithPopup();
      /* {
        authorizationParams: {
          audience: 'https://www.googleapis.com/youtube/v3/',
          scope: 'https://www.googleapis.com/auth/youtube.readonly',  
        }, */
      
      setToken(token);
      console.log("Token:", token);
    } catch (error) {
      console.error("Error obtaining token:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

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
