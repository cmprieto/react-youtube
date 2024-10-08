import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import {useLocalStorageContext} from '../providers/LocalStorageContext';

const VideoListChannelInformation = ({ information }) => {
  const [lastChannel, setLastChannel] = useLocalStorage(
    "channels-react-youtube",
    []
  );
  const { LimitArrayChannelsFav } = useLocalStorageContext();
  //const { theme } =  useUserContext();
  const [theme] = useLocalStorage("theme","");
  //PONER UNA FUNCION REVISE SI EL CANAL VISITADO ESTÁ EN EL HISTORIAL CON METODO SOME

  let nombreCanal = "";
  const tieneNombre = (nombreCanal) => {
    return lastChannel.some((obj) => obj.id === nombreCanal);
  };

  useEffect(() => {
    //verifica si canal visitado está en la lista de localstorage
    nombreCanal = information.id;
    const existeNombre = tieneNombre(information.id);
   // alert('existe nombre',existeNombre);
    
   ( existeNombre ) && LimitArrayChannelsFav();  // -> LIMITAR Nº ITEMS DEL ARRAY DE LOCALSTORAGE.METODO
   
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
            <h2 className={`channelInfo--container--cabecera--title--description${theme}`}>
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
