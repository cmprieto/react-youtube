import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

const VideoListChannelInformation = ({ information }) => {
  const [lastChannel, setLastChannel] = useLocalStorage(
    "channels-react-youtube",
    []
  );

  //PONER UNA FUNCION REVISE SI EL CANAL VISITADO ESTÁ EN EL HISTORIAL CON METODO SOME
  const Nmax = 14;
  let nombreCanal = "";
  const tieneNombre = (nombreCanal) => {
    return lastChannel.some((obj) => obj.id === nombreCanal);
  };

  // LIMITAR Nº ITEMS DEL ARRAY DE LOCALSTORAGE A 15 Y poder grabar nuevos

  const verificarNItems = () => {
    let channels = localStorage.getItem("channels-react-youtube");
    if (channels) {
      channels = JSON.parse(channels);
          if (channels.length > 14) {
            alert("voy a borrarrrrr")
            channels.slice(1, 13);
          }
    const updatedChannels = JSON.stringify(channels);
    localStorage.setItem("channels-react-youtube", updatedChannels);
    } else {
      console.log("No hay datos almacenados bajo la clave 'channels-react-youtube'");
    }
  };

  useEffect(() => {
    //verifica si canal visitado está en la lista de localstorage
    nombreCanal = information.id;
    const existeNombre = tieneNombre(nombreCanal);
    //alert(existeNombre);
    
    existeNombre === false && verificarNItems();  // -> LIMITAR Nº ITEMS DEL ARRAY DE LOCALSTORAGE A 15 Y poder grabar nuevos
   
    //solo añade canal visitado sino está en la lista de localstorage
    existeNombre === false &&
      setLastChannel([
        {
          url: information.snippet.thumbnails.medium.url,
          title: information.snippet.title,
          id: information.id,
        },
        ...lastChannel,
      ]);
  }, [information]); //AÑADIMOS CANAL VISITADO A HISTORIAL

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
            <h2 className="channelInfo--container--cabecera--title--description">
              {" "}
              {information.snippet.description}
            </h2>
            <p>
              {" "}
              {information.snippet.customUrl} -{" "}
              {information.statistics.subscriberCount} suscriptores
            </p>
            <p>
              {" "}
              {information.statistics.videoCount} videos -{" "}
              {information.statistics.viewCount} visualizaciones
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoListChannelInformation;
