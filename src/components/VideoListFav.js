import { useLocalStorage } from "@uidotdev/usehooks";
import VideoItem from "./VideoItem";

const VideoListFav = () => {
  const [favorito] = useLocalStorage("favoritos-youtube", []);

  return (
    <div className="videolistFavContainer">
      <h2>Favorites videos</h2>
      <div className="videolistFavContainer--videos">
        {favorito &&
          favorito.map((item, index) => {
            return (
              <div className="videoitem" key={index}>
                <VideoItem video={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VideoListFav;
