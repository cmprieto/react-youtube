import { useUserContext } from "../providers/UserProvider";
import {useLocation} from 'react-router-dom';
import Result from "./Result";


const VideoDetail = () => {
  let { state } = useLocation();
  const { dataYoutube,theme } = useUserContext();
  
  return (
    <div className={`videodetail${theme}`}>
      <div className="videodetail--videocontainer">
        {console.log('state',state)}

    {/*   SI NO SE PASA EL VIDEO POR STATE SE PASA EL 1ªDE LA LISTA */}
      {state ? <Result videotoShow={state.state.video} /> : dataYoutube && <Result videotoShow={dataYoutube[0]}/> }

       </div>
    </div>
  );
};

export default VideoDetail;
