
const VideoListChannelInformation = ({ information }) => {

  return (
    <div className="channelInfo">
      {information.etag && (
        <div className="channelInfo--container">
          <img
            src={information.snippet.thumbnails.medium.url}
            alt="logochannel"
            className="channelInfo--container--cabecera--img"
          ></img>
          <div className="channelInfo--container--cabecera--title">
            <h1> {information.snippet.title}</h1>
            <h2 className="channelInfo--container--cabecera--title--description"> {information.snippet.description}</h2>
            <p> {information.snippet.customUrl} - {information.statistics.subscriberCount} suscriptores</p>
            <p> {information.statistics.videoCount} videos - {information.statistics.viewCount} visualizaciones</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoListChannelInformation;
