import Result from "./Result";
import {useLocation} from 'react-router-dom';
import { useUserContext } from "../providers/UserProvider";

const VideoDetail = () => {
  let { state } = useLocation();
  const { dataYoutube,theme } = useUserContext();
  return (
    <div className={`videodetail${theme}`}>
      <div className="videodetail--videocontainer">
        {state ? <Result videotoShow={state.state.video} /> : dataYoutube && <Result videotoShow={dataYoutube[0]}/>}
       </div>
    </div>
  );
};

export default VideoDetail;
