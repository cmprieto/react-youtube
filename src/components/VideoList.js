import { useUserContext } from "../providers/UserProvider";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const { dataYoutube, termFromSearchBar } = useUserContext();
  const [busquedas, setBusquedas] = useLocalStorage("react-youtube", []);
  const [urlthumb, setUrlthumb] = useState("");

  //AÑADIMOS RESULTADO DE ULTIMAS BUSQUEDAS A LOCALSTORAGE

  const update = (newState) => {
    /* console.log("urlthumb previo", newState); */
    setBusquedas([
      { busqueda: termFromSearchBar, url: newState },
      ...busquedas,
    ]);
  };

  useEffect(() => {
    const listar = async () => {
      if (dataYoutube) {
   /*      alert("realizar busqueda"); */
        /* setUrlthumb(dataYoutube[0].snippet.thumbnails.default.url); */ /*  ---> NO FUNCIONA PQ NO PUEDES MANEJAR VALOR DEL ESTADO ACTUALIZADO HASTA Q TERMINA DE RENDERIZAR TODO EL COMPONENTE */
        //PARA PODER MANEJAR EL ESTADO UNA VEZ ACTUALIZADO ANTES DE QUE FINALICE EL RENDERIZADO DEL COMPONENTE HAY QUE HACERLO ASI
        setUrlthumb((prevState) => {
          //alert('aaaaaaaaaaaaaaa');
          const newState = dataYoutube[0].snippet.thumbnails.default.url;
          // Hacer algo con el nuevo estado aquí si es necesario
          urlthumb && update(newState);
          console.log("New State:", newState);
          return newState;
        });
      }
    };
    listar(); // MANEJO FUNCION SIENDO ESTA ASINCRONA
  }, [dataYoutube]);

  return (
    <div className="videolist">
      {dataYoutube &&
        dataYoutube.map((item, i) => {
          return (
            <div className="videoitem" key={i}>
              <VideoItem video={item} />
            </div>
          );
        })}
    </div>
  );
};

export default VideoList;
