import { Fragment } from "react";

const Result = ({ videotoShow }) => {
  /*   console.log("firstResult", videotoShow); */
  const VIDEO_ID = videotoShow.id.videoId;
  console.log( VIDEO_ID);
  return (
    <Fragment>
      <iframe
        id="player"
        type="text/html"
        className="videodetail--videocontainer--iframe"
        allowFullScreen
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
      ></iframe>
      <div className="videodetail--videocontainer--text">
        <h1>{videotoShow.snippet.title}</h1>
        <p>{videotoShow.snippet.description}</p>
      </div>
    </Fragment>
  );
};

export default Result;
