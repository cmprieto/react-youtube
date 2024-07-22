import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";
import VideoItem from "./VideoItem";
import YoutubeListSkeleton from "../assets/skeleton/YoutubeListSkeleton";
import { useLocalStorage } from "@uidotdev/usehooks";

const VideoList = () => {
  const {
    dataYoutube,
    setTermFromSearchBar,
    setHandlePage,
    prevPage,
    nextPage,
  } = useUserContext();
  const [theme] = useLocalStorage("theme", "");

  /* MANEJAR RESULTADOS DE LA BUSQUEDA */
  const handlepageUp = () => {
    setHandlePage(nextPage);
  };

  const handlepageDown = () => {
    setHandlePage(prevPage);
  };

/*   useEffect(() => {
    setTermFromSearchBar();
  }, [dataYoutube]); */

  return (
    <div className={`videoListContainer${theme}`}>
      {dataYoutube ? <h2>Your search!</h2> : <h2>Search your videos</h2>}
      <div className={`videolist${theme}`}>
        {dataYoutube ? (
          dataYoutube.map((item, i) => {
            return (
              <div className="videoitem" key={i}>
                <VideoItem video={item} />
              </div>
            );
          })
        ) : (
          <YoutubeListSkeleton />
        )}
      </div>
      <div   className={`videolistFavContainer--handle`}>
        <button onClick={handlepageDown}   className={`videolistFavContainer--handle--button${theme}`}>
          <p> Previous Videos</p>{" "}
        </button>
        <button onClick={handlepageUp}   className={`videolistFavContainer--handle--button${theme}`}>
          <p> Next Videos</p>
        </button>
      </div>
    </div>
  );
};

export default VideoList;
