import { Fragment } from "react";
import VideoList from "../components/VideoList";
import TermLists from "../components/TermLists";

import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <Fragment>
      <div className="container--home">
     {/*  <Searchbar/> */}
        {/*       <VideoDetail /> */}
        <VideoList /> 
 {/*        <VideoList /> */}
        <TermLists/>
      </div>
    </Fragment>
  );
};

export default Home;
