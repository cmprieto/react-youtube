
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import {useUserContext} from '../providers/UserProvider';
import ThreeDots from '../assets/skeleton/ThreeDots';

const Video_detail = () => {
  const { dataYoutube } = useUserContext(); 
  return (
    <div className="container--videodetail">
       {dataYoutube ?<VideoDetail />:<ThreeDots />}
       {dataYoutube ?<VideoList />:<ThreeDots />}
    </div>
  );
};

export default Video_detail;
