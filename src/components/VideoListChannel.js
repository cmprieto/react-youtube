import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import VideoListChannelInformation from "./VideoListChannelInformation";
import VideoItem from "./VideoItem";
import {useLocalStorage} from '@uidotdev/usehooks';

const VideoListChannel = () => {
  const { id } = useParams();
  const [theme] = useLocalStorage("theme","");
  const {
    listChannel,
    setChannel,
    channelInformation,
    setHandleChannelPage,
    prevChPage,
    nextChPage,
  } = useUserContext();


  setChannel(id);

  /* MANEJAR RESULTADOS DE LA BUSQUEDA */
  const handlepageUp = () => {
    setHandleChannelPage(nextChPage);
  };

  const handlepageDown = () => {
    setHandleChannelPage(prevChPage);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setChannel(id);
  }, []);

  return (
    <div className="videolistFavContainer">
      {channelInformation && (
        <VideoListChannelInformation information={channelInformation} />
      )}
      <div className="videolistFavContainer--videos">
        {listChannel &&
          listChannel.map((item, index) => {
            return (
              <div className="videoitem" key={"channel" + index}>
                <VideoItem video={item} />
              </div>
            );
          })}
        <div className="videolistFavContainer--handle">
          <button
            onClick={handlepageDown}
            className={`videolistFavContainer--handle--button${theme}`}
          ><p>
            Previous Videos</p>
  
          </button>
          <button
            onClick={handlepageUp}
            className={`videolistFavContainer--handle--button${theme}`}
          >
            <p>Next Videos</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoListChannel;
