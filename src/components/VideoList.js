import { useUserContext } from "../providers/UserProvider";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import VideoItem from "./VideoItem";
import { useLocalStorageContext } from "../providers/LocalStorageContext";

const VideoList = () => {
  const { dataYoutube, termFromSearchBar, setTermFromSearchBar, setPage } =
    useUserContext();
  const [busquedas, setBusquedas] = useLocalStorage("react-youtube", []);
  const [urlthumb, setUrlthumb] = useState("");
  const { existTermInList, setExistTermInList } = useLocalStorageContext();
  //AÑADIMOS RESULTADO DE ULTIMAS BUSQUEDAS A LOCALSTORAGE

  const update = (newState) => {
    /* console.log("urlthumb previo", newState); */
    if (existTermInList === false) {
      //sino existe se añade a localStorage
      setBusquedas([
        { busqueda: termFromSearchBar, url: newState },
        ...busquedas,
      ]);
    }
    existTermInList === true && setExistTermInList(false); //si existe no se añade y reseteo
  };

  /* 
const handlepageUp=()=>{
  setPage((prevState)=>{
    const newState='CAoQAA';
    return newState;
  })
}
const handlepageDown=()=>{
  setPage((prevState)=>{
    const newState='CAUQAA';
    return newState;
  })
} */
  useEffect(() => {
    const listar = async () => {
      if (dataYoutube) {
        //alert("RENDERIZADO VIDEOLIST");
        /* setUrlthumb(dataYoutube[0].snippet.thumbnails.default.url); */ /*  ---> NO FUNCIONA PQ NO PUEDES MANEJAR VALOR DEL ESTADO ACTUALIZADO HASTA Q TERMINA DE RENDERIZAR TODO EL COMPONENTE */
        //PARA PODER MANEJAR EL ESTADO UNA VEZ ACTUALIZADO ANTES DE QUE FINALICE EL RENDERIZADO DEL COMPONENTE HAY QUE HACERLO ASI
        setUrlthumb((prevState) => {
          const newState = dataYoutube[0].snippet.thumbnails.default.url;
          // Hacer algo con el nuevo estado aquí si es necesario
          urlthumb && update(newState);
          console.log("New State:", newState);
          return newState;
        });
      }
    };
    listar(); // MANEJO FUNCION SIENDO ESTA ASINCRONA
    //setTermFromSearchBar(); //NO ME GRABA TERMINO DE BUSQUEDA EN TERMLISTS SI RESETEO AQUI
  }, [dataYoutube]);

  return (
    <div className="videoListContainer">
      {dataYoutube ? <h2>Your search!</h2> : <h2>Search your videos</h2>}
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
      {/*       <button onClick={handlepageDown}>DOWN video</button>
      <button onClick={handlepageUp}>UP video</button> */}
    </div>
  );
};

export default VideoList;
