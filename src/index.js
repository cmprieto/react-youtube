import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-850jr4fzp1pse6qo.eu.auth0.com"
    clientId="z2xE2xzSOyvOogMfsBDVAE9MoPIXSW37"
    authorizationParams={{
      redirect_uri: window.location.origin + "/react-youtube/",
      audience: "https://dev-850jr4fzp1pse6qo.eu.auth0.com/api/v2/",   
     scope: "read:current_user update:current_user_metadata",
    }}
    
  >
      <App />
   
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
