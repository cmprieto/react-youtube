import { useEffect } from "react";
import { useUserContext } from "../providers/UserProvider";
import VideoItem from "./VideoItem";
import { useParams } from "react-router-dom";

const VideoListChannel = () => {
  const { id } = useParams();
  const { listChannel, channel, setChannel } = useUserContext();
  setChannel(id);

  useEffect(()=>{
    setChannel(id);
  },[]);
  return (
    <div className="videolistFavContainer">
      {listChannel && (
        <h1>VideoListChannel: {listChannel[0].snippet.channelTitle}</h1>
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
