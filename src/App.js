import React from "react";
import UserProvider from "./providers/UserProvider";
import GetYoutube from "./services/GetYoutube";
import Router from "./app/Router";
//import GetRecommended from "./services/GetRecommended";
import GetChannels from "./services/GetChannels";
import GetChannelInformation from "./services/GetChannelInformation";

const App = () => {
  return (
    <UserProvider>
      <GetYoutube />
      {/*       <GetRecommended/> */}
      <GetChannelInformation />
      <GetChannels />
      <Router />
    </UserProvider>
  );
};

export default App;
