import { useLocalStorage } from "@uidotdev/usehooks";
import VideoItem from "./VideoItem";
import YoutubeListSkeleton from "../assets/skeleton/YoutubeListSkeleton";

const VideoListFav = () => {  
  const [theme] = useLocalStorage("theme","");
  const [favorito] = useLocalStorage("favoritos-youtube", []);
  return (
    <div className={`videolistFavContainer${theme}`}>
      <h2>Favorites videos</h2>
      <div className={`videolistFavContainer--videos${theme}`}>
        {favorito[0] ? (
          favorito.map((item, index) => {
            return (
              <div className="videoitem" key={index}>
                <VideoItem video={item} />
              </div>
            );
          })
        ) : (
          <YoutubeListSkeleton />
        )}
      </div>
    </div>
  );
};

export default VideoListFav;
