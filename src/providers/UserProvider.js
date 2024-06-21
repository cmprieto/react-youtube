import { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [dataApiYoutube, setDataApiYoutube] = useState();
  const [dataYoutube, setDataYoutube] = useState(); // añado nuevo estado donde incluyo datos extraidos de API y añado estado isFavorite como booleano
  const [termFromSearchBar, setTermFromSearchBar] = useState("");
  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);
  const [channel, setChannel] = useState();
  const [listChannel, setListChannel] = useState();
  const [page, setPage] = useState('CAUQAA');
  // HELPERS

  //REVISA LISTADO DE VIDEOS FAVORITOS SE ENCUENTRAN EN LOCALSTORAGE
  //SI ESTÁ AÑADIMOS TRUE A 1 NUEVO ESTADO --> MEDIANTE USEEFFECT
  // AÑADIR NUEVA PROPIEDAD A CADA VIDEO QUE INDICA SI ES FAV CON 1 BOOLEANO.
  const isFav = () => {
    const addIsFavoriteToAPI = dataApiYoutube.map((item, i) => {
      const existe = favorito.some(
        (dataApiYoutube) => item.etag === dataApiYoutube.etag
      ); //METODO SOME DEVUELVE UN BOOLEANO SI AL MENOS UNA VEZ SE CUMPLA LA CONDICION
      /* console.log("existe", existe); */
      return { ...dataYoutube, ...item, isFavorite: existe };
    });
    console.log("addIsFavoriteToAPI", addIsFavoriteToAPI);
    setDataYoutube(addIsFavoriteToAPI);
  };


 const handleSubmitTermLists = ({ busqueda }) => {
    //setDataYoutube();         //RESETEAMOS ESTADO API EN CADA NUEVA BUSQUEDA->NO CAL
 setTermFromSearchBar(busqueda);
  };

  useEffect(() => {
    setDataYoutube();
    dataApiYoutube && isFav();
  }, [dataApiYoutube]);

  return (
    <AppContext.Provider
      value={{
        dataApiYoutube,
        setDataApiYoutube,
        dataYoutube,
        setDataYoutube,
        termFromSearchBar,
        setTermFromSearchBar,
        channel,
        setChannel,
        listChannel,
        setListChannel,
        page,
        setPage,
        handleSubmitTermLists
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default UserProvider;
