import { Fragment } from "react";

const FirstResult = ({ firstResult }) => {
  const title = firstResult.snippet.title;
  const VIDEO_ID = firstResult.id.videoId;
  return (
    <Fragment>
      <iframe
        id="player"
        type="text/html"
        className="videodetail--videocontainer--iframe"
        allowFullScreen
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
      ></iframe>
      <h1>{title}</h1>
    </Fragment>
  );
};

export default FirstResult;
