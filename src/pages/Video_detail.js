import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import { useUserContext } from "../providers/UserProvider";
import ThreeDots from "../assets/skeleton/ThreeDots";
import { useLocation } from "react-router-dom";
import SEO from '../services/SEO/SEO';

const Video_detail = () => {
  const { dataYoutube } = useUserContext();
  let { state } = useLocation(); //lo importo solo para control skeleton
  return (
    <div className="container--videodetail">
            <SEO
        title="React Youtube | App por Carlos Prieto"
        description="Versión de Youtube realizada con React, visualiza los videos consultados a través de una palabra de busqueda"
        keywords="youtube, youtube api, react youtube"
        name="Carlos Prieto"
        type="website"
         image="https://cmprieto.github.io/react-youtube/docs/screenshot.png"
      />
      {state || dataYoutube ? <VideoDetail /> : <ThreeDots />}
      {/*  <VideoDetail /> */}
      {dataYoutube ? <VideoList /> : <ThreeDots />}
    </div>
  );
};

export default Video_detail;
