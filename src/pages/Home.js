import { Fragment, useEffect } from "react";
import { useUserContext } from "../providers/UserProvider";
import { Helmet } from "react-helmet-async";
import SEO from "../services/SEO/SEO";
import VideoList from "../components/VideoList";
import VideoListFav from "../components/VideoListFav";
import TermLists from "../components/TermLists";
import ChannelsVisited from "../components/ChannelsVisited";
import GetRecommended from "../services/GetRecommended";
import VideoListRecommended from "../components/VideoListRecommended";

const Home = () => {
  const { dataYoutube, termFromSearchBar } = useUserContext();
  useEffect(() => {
    <GetRecommended />;
  }, []);

  return (
    <Fragment>
      <SEO
        title="React Youtube | App por Carlos Prieto"
        description="Es una versión de Youtube realizada con React, consumiendo los videos y toda la información a través de la API de Youtube"
        keywords="youtube, youtube api, react youtube"
        name="Carlos Prieto"
        type="website"
        image="https://cmprieto.github.io/react-youtube/docs/screenshot.png"
      />
      {/* <Helmet>
        <title>Learning React Helmet!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet> */}

      <div className="container--home">
        {/*      {!dataYoutube?<VideoListRecommended/>:<VideoList /> }  */}
        {dataYoutube && <VideoList />}
        <VideoListFav />
        <TermLists />
        <ChannelsVisited />
      </div>
    </Fragment>
  );
};

export default Home;
