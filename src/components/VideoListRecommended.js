import { useUserContext } from "../providers/UserProvider";
import VideoItem from "./VideoItem";
import YoutubeListSkeleton from "../assets/skeleton/YoutubeList";
import {useLocalStorage} from '@uidotdev/usehooks';


const VideoListRecommended = () => {
  const { getRecommended } =
    useUserContext();
    const [theme] = useLocalStorage("theme","");
  return (
    <div className={`videoListContainer${theme}`}>
      {getRecommended ? <h2>Recommended Videos From Youtube</h2> : <h2>Do your search</h2>}
      <div className={`videolist${theme}`}>
        {getRecommended ?
          getRecommended.map((item, i) => {
            return (
              <div className="videoitem" key={i}>
                <VideoItem video={item} />
              </div>
            );
          }):<YoutubeListSkeleton/>}
      </div>
    </div>
  );
};

export default VideoListRecommended;
