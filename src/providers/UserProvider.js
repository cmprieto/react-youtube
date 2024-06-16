import { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import VideoItem from "../components/VideoItem";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [dataYoutube, setDataYoutube] = useState();
  const [termFromSearchBar, setTermFromSearchBar] = useState("");

  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);

  const [favVideo, setFavVideo] = useState(false);
  const [resultado, setResultado] = useState([]);

  // HELPERS

  //REVISAR SI RESULTADO LISTADO DE VIDEOS SE ENCUENTRA EN LOCALSTORAGE
  //Y SI ES ASI AÑADIR TRUE AL NUEVO ESTADO --> MEDIANTE USEEFFECT

  const addItem = () => {
    {
      dataYoutube &&
        dataYoutube.map((item, i) => {
          if (favorito.includes(item.id.videoId)) {
            setFavVideo(true);
            setResultado([...resultado,{ ...item, fabo: true }]);
          } 
          else {
            setFavVideo(false);
            setResultado([...resultado,{ ...item, fabo: false }]);
          }
        });
    }


    /*     const newDataYoutube = favorito.filter((favoritos) => favoritos.etag == dataYoutube.etag); */
    /*     const faborito = favorito.etag.includes(dataYoutube.etag); */
    /*  newDataYoutube.push({ ...dataYoutube, favorito: faborito }); */
    /*  setFavorito([...newDataYoutube, dataYoutube]); */
    /*    setResultado(faborito); */

    // console.log('newDataYoutube', newDataYoutube);
    /*    const newDataYoutube = carrito.filter((products) => products.id !== item.id); */
    /*    newCart.push({ ...item, cantidad: quantity });
    setCarrito(newCart); */
  };

  /*   const [urlthumb,setUrlthumb] =useState(''); */

  useEffect(() => {
    dataYoutube && addItem();
  }, [dataYoutube]);
  /*   const [busquedas, setBusquedas] = useLocalStorage([{"Busquedas":'', "url":''}]); */

  // HELPERS
  /* const addHistory=(texto)=>{
  setUrlthumb(dataYoutube[0].snippet.thumbnails.default.url); 
  console.log('urlthumb',urlthumb);
  console.log('texto',texto);
  setBusquedas([...busquedas,{ "Busqueda": texto, "url": urlthumb }]);
} */

  return (
    <AppContext.Provider
      value={{
        dataYoutube,
        setDataYoutube,
        termFromSearchBar,
        setTermFromSearchBar,
        favVideo,
        setFavVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default UserProvider;
