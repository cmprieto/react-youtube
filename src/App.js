import React from "react";
import UserProvider from "./providers/UserProvider";
import GetYoutube from "./services/GetYoutube";
import Router from "./app/Router";
//import GetRecommended from "./services/GetRecommended";
import GetChannels from "./services/GetChannels";

const App = () => {



  return (
    <UserProvider>
      <GetYoutube/>
{/*       <GetRecommended/> */}
      <GetChannels/>
      <Router/>
      
    </UserProvider>
  );
};

export default App;
