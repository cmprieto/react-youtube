import { useUserContext } from "../providers/UserProvider";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const { dataYoutube } = useUserContext();

  return (
    <div className="videolist">
      {dataYoutube &&
        dataYoutube.map((item, i) => {
          return (
            <div className="videoitem" key={i}>
              <VideoItem video={item} />
            </div>
          );
        })}
    </div>
  );
};

export default VideoList;
