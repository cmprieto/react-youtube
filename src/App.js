import React from "react";
import UserProvider from "./providers/UserProvider";
import GetYoutube from "./services/GetYoutube";
import Router from "./app/Router";

const App = () => {

  return (
    <UserProvider>
      <GetYoutube/>
      <Router/>
      
    </UserProvider>
  );
};

export default App;
