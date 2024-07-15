import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import {useUserContext} from '../providers/UserProvider';
import ProfileSkeleton from '../assets/skeleton/ProfileSkeleton';

const ChannelsVisited = () => {
  const [lastChannel] = useLocalStorage("channels-react-youtube", []);
  const { theme } = useUserContext();
  return (
    <div className="channel">
      <h1>Last Channels Visited</h1>
      <div className={`channelContainer${theme}`}>
        {lastChannel[0] ?
          lastChannel.map(({ url, title,id }, index) => {
            if (index < 15) {
              return (
                <Link to={`/react-youtube/channel/${id}`} className={`channelContainer--link${theme}`} key={id}>
                  <div className="channelContainer--list" >
                    <img
                      src={url}
                      alt="thumbs"
                      className="channelContainer--list--img"
                    />
                    <p className="channelContainer--list--text">{title}</p>
                  </div>
                </Link>
              );
            }
            return null;
          }):<ProfileSkeleton/>}
      </div>
    </div>
  );
};

export default ChannelsVisited;
