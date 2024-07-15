import { Fragment, useEffect } from "react";
import VideoList from "../components/VideoList";
import VideoListFav from "../components/VideoListFav";
import TermLists from "../components/TermLists";
import ChannelsVisited from "../components/ChannelsVisited";
import GetRecommended from "../services/GetRecommended";
import VideoListRecommended from "../components/VideoListRecommended";
import {useUserContext} from '../providers/UserProvider';

const Home = () => {
  const { dataYoutube, termFromSearchBar } =
  useUserContext();
useEffect(()=>{
<GetRecommended/>
},[]);

  return (
    <Fragment>
      <div className="container--home">
{/*      {!dataYoutube?<VideoListRecommended/>:<VideoList /> }  */}
     {dataYoutube&&<VideoList /> } 
        <VideoListFav/>
        <TermLists/>
        <ChannelsVisited/>
      </div>
    </Fragment>
  );
};

export default Home;
