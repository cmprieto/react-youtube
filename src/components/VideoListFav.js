import {useLocalStorage} from '@uidotdev/usehooks';
import VideoItem from './VideoItem';

const VideoListFav = () => {
    const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);


    return (
      <div className="videolistFav">
        {favorito &&
          favorito.map((item, index) => {
            return (
              <div className="videoitem" key={index}>
             <VideoItem video={item} /> 
              </div>
            );
          })}
      </div>
    );
  };
  

export default VideoListFav