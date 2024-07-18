import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import VideoListChannelInformation from "./VideoListChannelInformation";
import VideoItem from "./VideoItem";


const VideoListChannel = () => {
  const { id } = useParams();
  const {
    listChannel,
    setChannel,
    channelInformation,
  } = useUserContext();

  setChannel(id);

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
      </div>
    </div>
  );
};

export default VideoListChannel;
