import React from "react";
import UserProvider from "./providers/UserProvider";
import GetYoutube from "./services/GetYoutube";
import Router from "./app/Router";
import GetRecommended from "./services/GetRecommended";
import GetChannels from "./services/GetChannels";
import GetChannelInformation from "./services/GetChannelInformation";
import LocalStorageContext from "./providers/LocalStorageContext";
import GetPlaylists from "./services/GetPlaylists";


const App = () => {
  return (
    <UserProvider>
      <LocalStorageContext>
 {/*      <GetRecommended /> */}
        <GetYoutube />
        <GetChannelInformation />
        <GetChannels />
     {/*    <GetPlaylists/>
 */}        <Router />
      </LocalStorageContext>
    </UserProvider>
  );
};

export default App;
