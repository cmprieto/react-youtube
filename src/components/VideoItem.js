import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import fav from "../assets/icon/fav.png";
import favSelected from "../assets/icon/fav--selected.png";
import { useUserContext } from "../providers/UserProvider";
import he from 'he';//para decodificar caracteres especiales en react

const VideoItem = ({ video }) => {
  const { setTermFromSearchBar } = useUserContext();

  useEffect(() => {
    setTermFromSearchBar(); //RESETEO TERM PARA QUE SI REPETIMOS 1 TERM VUELVA A MOSTRAR LA RESPUESTA VIDEOS. 
  }, []);

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
              <p className="videoitem--title">{he.decode(video.snippet.title)}</p> {/* decodificar caracteres especiales */}
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
