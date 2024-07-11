import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";
import VideoItem from "./VideoItem";


const VideoList = () => {
  const { dataYoutube, setTermFromSearchBar, setPage,theme } =
    useUserContext();

   /* 
const handlepageUp=()=>{
  setPage((prevState)=>{
    const newState='CAoQAA';
    return newState;
  })
}
const handlepageDown=()=>{
  setPage((prevState)=>{
    const newState='CAUQAA';
    return newState;
  })
} */

  useEffect(() => {
    setTermFromSearchBar();
  }, [dataYoutube]);

  return (
    <div className={`videoListContainer${theme}`}>
      {dataYoutube ? <h2>Your search!</h2> : <h2>Search your videos</h2>}
      <div className={`videolist${theme}`}>
        {dataYoutube &&
          dataYoutube.map((item, i) => {
            return (
              <div className="videoitem" key={i}>
                <VideoItem video={item} />
              </div>
            );
          })}
      </div>
      {/*       <button onClick={handlepageDown}>DOWN video</button>
      <button onClick={handlepageUp}>UP video</button> */}
    </div>
  );
};

export default VideoList;
