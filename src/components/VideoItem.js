import { Fragment } from "react";
import { Link } from "react-router-dom";
import fav from "../assets/icon/fav.png";
import favSelected from "../assets/icon/fav--selected.png";

const VideoItem = ({ video }) => {

  return (
    <Fragment>
      {video && (
        <Link
          to={`/react-youtube/videodetail/${ video.id.videoId ? video.id.videoId : video.id}`}
          state={{ state: { video } }}
        >
          {video && (
            <div className="videoitem--container">
              <img
                src={video.snippet.thumbnails.high.url}
                className="videoitem--thumbs"
                alt="youtubethumbs"
              />
              <p className="videoitem--title">{video.snippet.title}</p>
              <div className="videoitem--subtitle">
                <p className="videoitem--subtitle--channeltitle">
                  {video.snippet.channelTitle}
                </p>
                <p className="videoitem--subtitle--channeltitle">
                  {new Date(video.snippet.publishTime).toLocaleDateString()}
                </p>
                {video.isFavorite ? (
                  <img src={favSelected} alt="favorito" />
                ) : (
                  <img src={fav} alt="NoFavorito" />
                )}
              </div>
            </div>
          )}
        </Link>
      )}
    </Fragment>
  );
};

export default VideoItem;
