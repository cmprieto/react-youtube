import React from "react";
import UserProvider from "./providers/UserProvider";
import GetYoutube from "./services/GetYoutube";
import Router from "./app/Router";
//import GetRecommended from "./services/GetRecommended";
import GetChannels from "./services/GetChannels";
import GetChannelInformation from "./services/GetChannelInformation";
import LocalStorageContext from "./providers/LocalStorageContext";


const App = () => {
  return (
    <UserProvider>
      <LocalStorageContext>
      <GetYoutube />
      {/*       <GetRecommended/> */}
      <GetChannelInformation />
      <GetChannels />
      <Router />
      </LocalStorageContext>
    </UserProvider>
  );
};

export default App;
