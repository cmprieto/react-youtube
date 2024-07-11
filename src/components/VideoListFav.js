import {useLocalStorage} from '@uidotdev/usehooks';
import {useUserContext} from '../providers/UserProvider';
import VideoItem from "./VideoItem";

const VideoListFav = () => {
  const { theme } = useUserContext();
  const [favorito] = useLocalStorage("favoritos-youtube", []);
  return (
    <div className={`videolistFavContainer${theme}`}>
      <h2>Favorites videos</h2>
      <div className={`videolistFavContainer--videos${theme}`}>
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
