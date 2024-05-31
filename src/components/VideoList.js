import { useUserContext } from "../providers/UserProvider";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const { dataYoutube } = useUserContext();
  return (
    <div className="videolist">

    {dataYoutube &&
      dataYoutube.map((item,key)=>{
        return <div key={item.id.videoId}><VideoItem video={item}/></div>
      })
      }
      
      <VideoItem />
    </div>
  );
};

export default VideoList;
