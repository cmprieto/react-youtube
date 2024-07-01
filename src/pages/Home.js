import { Fragment } from "react";
import VideoList from "../components/VideoList";
import VideoListFav from "../components/VideoListFav";
import TermLists from "../components/TermLists";
import ChannelsVisited from "../components/ChannelsVisited";


const Home = () => {
  return (
    <Fragment>
      <div className="container--home">
        <VideoList /> 
        <VideoListFav/>
        <TermLists/>
        <ChannelsVisited/>
      </div>
    </Fragment>
  );
};

export default Home;
