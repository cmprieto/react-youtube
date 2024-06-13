import { Fragment } from "react";
import fav from "../assets/icon/fav.png";
const Result = ({ videotoShow }) => {
  const VIDEO_ID = videotoShow.id.videoId;
  console.log(VIDEO_ID);
  return (
    <Fragment>
      <iframe
        id="player"
        type="text/html"
        className="videodetail--videocontainer--iframe"
        allowFullScreen
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
        frameborder="0"
      ></iframe>
      <div className="videodetail--videocontainer--subframe">
        <div className="videodetail--videocontainer--subframe--texto">
          <h1>{videotoShow.snippet.title}</h1>
          <p>{videotoShow.snippet.description}</p>
        </div>
        <img src={fav} alt="favorito"></img>
      </div>
    </Fragment>
  );
};

export default Result;
