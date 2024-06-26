import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const ChannelsVisited = () => {
  const [lastChannel] = useLocalStorage("channels-react-youtube", []);
  return (
    <div className="channel">
      <h1>Last Channels Visited</h1>
      <div className="channelContainer">
        {lastChannel &&
          lastChannel.map(({ url, title,id }, ind) => {
            if (ind < 14) {
              return (
                <Link to={`/react-youtube/channel/${id}`} className="channelContainer--link">
                  <div className="channelContainer--list" key={'channel'+ind}>
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
          })}
      </div>
    </div>
  );
};

export default ChannelsVisited;
