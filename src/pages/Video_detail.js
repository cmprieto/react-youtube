import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import { useUserContext } from "../providers/UserProvider";
import ThreeDots from "../assets/skeleton/ThreeDots";
import { useLocation } from "react-router-dom";

const Video_detail = () => {
  const { dataYoutube } = useUserContext();
  let { state } = useLocation(); //lo importo solo para control skeleton
  return (
    <div className="container--videodetail">
      {state || dataYoutube ? <VideoDetail /> : <ThreeDots />}
      {/*  <VideoDetail /> */}
      {dataYoutube ? <VideoList /> : <ThreeDots />}
    </div>
  );
};

export default Video_detail;
