import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const VideoItem = ({ video }) => {
  return (
    <Fragment>
      {video && (
        <Link
          to={`/react-youtube/${video.id.videoId}`}
          state={{ state: { video } }}>
          {video && (
            <div className="videoitem--container">    {/*    //OKO MAQUETACION */}
              <img
                src={video.snippet.thumbnails.high.url}
                className="videoitem--thumbs"
                alt="youtubethumbs"
              />
              <p className="videoitem--title">{video.snippet.title}</p>
              <p className="videoitem--channeltitle">
                {video.snippet.channelTitle}
              </p>
            </div>
          )}
        </Link>
      )}
    </Fragment>
  );
};

export default VideoItem;
