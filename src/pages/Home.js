import { Fragment } from "react";
import VideoList from "../components/VideoList";
import VideoListFav from "../components/VideoListFav";
import TermLists from "../components/TermLists";
import ChannelsVisited from "../components/ChannelsVisited";
import BottomMenu from "../components/BottomMenu";


const Home = () => {
  return (
    <Fragment>
      <div className="container--home">
        <VideoList /> 
        <VideoListFav/>
        <TermLists/>
        <ChannelsVisited/>
        <BottomMenu/>
      </div>
    </Fragment>
  );
};

export default Home;
