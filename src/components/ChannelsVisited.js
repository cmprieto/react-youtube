import { useLocalStorage } from "@uidotdev/usehooks";

const ChannelsVisited = () => {
  const [lastChannel] = useLocalStorage("channels-react-youtube", []);

  return (
    <div className="term">
      <h1>Channels Visited</h1>
      <div  className="termContainer">
        {lastChannel &&
          lastChannel.map(({ url, title }, index) => {
            if (index < 5) {
              return (
                <div className="termContainer--list" key={index}>
                  <img
                    src={url}
                    alt="thumbs"
                    className="termContainer--list--img"
                  />
                  <p className="termContainer--list--text">{title}</p>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default ChannelsVisited;
