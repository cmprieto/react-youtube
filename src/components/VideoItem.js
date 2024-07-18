import { Fragment } from "react";
import { Link } from "react-router-dom";
import fav from "../assets/icon/fav.png";
import favSelected from "../assets/icon/fav--selected.png";
import he from 'he';      //para decodificar caracteres especiales en react
import {useLocalStorage} from '@uidotdev/usehooks';

const VideoItem = ({ video }) => {
  const [theme] = useLocalStorage("theme","");
  return (
    <Fragment>
      {video && (
        <Link
          to={`/react-youtube/videodetail/${
            video.id.videoId ? video.id.videoId : video.id
          }`}
          state={{ state: { video } }}
        >
          {video && (
            <div className="videoitem--container">
              <img
                src={video.snippet.thumbnails.high.url}
                className="videoitem--thumbs"
                alt="youtubethumbs"
              />
              <p className={`videoitem--title${theme}`}>{video.snippet.title&&he.decode(video.snippet.title)}</p> {/* decodificar caracteres especiales */}
              <div className="videoitem--subtitle">
                <p className={`videoitem--subtitle--channeltitle${theme}`}>
                  {video.snippet.channelTitle}
                </p>
                <p className={`videoitem--subtitle--channeltitle${theme}`}>
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
