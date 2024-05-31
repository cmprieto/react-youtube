import { useUserContext } from "../providers/UserProvider";
import FirstResult from "./FirstResult";

const VideoDetail = () => {
  const { dataYoutube } = useUserContext();
  return (
    <div className="videodetail">
      <div className="videodetail--videocontainer">
        {dataYoutube ? (
          <FirstResult firstResult={dataYoutube[0]} />
        ) : (
          <p>No hay un resultado cargado aún</p>
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
