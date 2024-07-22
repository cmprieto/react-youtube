import { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [dataApiYoutube, setDataApiYoutube] = useState();
  const [getRecommended, setGetRecommended] = useState();
  const [dataYoutube, setDataYoutube] = useState(); // añado nuevo estado donde incluyo datos extraidos de API y añado estado isFavorite como booleano
  const [termFromSearchBar, setTermFromSearchBar] = useState("");
  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);
  const [channel, setChannel] = useState();
  const [listChannel, setListChannel] = useState();

  const [channelInformation, setChannelInformation] = useState();
  const [indexApi, setIndexApi] = useState(0);
  const [token, setToken] = useState("");
  //handle pg busqueda
  const [handlePage, setHandlePage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  //handle pg channel favorito
  const [handleChannelPage, setHandleChannelPage] = useState("");
  const [nextChPage, setNextChPage] = useState("");
  const [prevChPage, setPrevChPage] = useState("");
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


  const handleKey = () => {
    indexApi < 2 ? setIndexApi((prevState) => prevState + 1) : setIndexApi(0);
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
        handlePage,
        setHandlePage,
        channelInformation,
        setChannelInformation,
        indexApi,
        setIndexApi,
        getRecommended,
        setGetRecommended,
        token,
        setToken,
        nextPage,
        setNextPage,
        prevPage,
        setPrevPage,
        handleChannelPage,
        setHandleChannelPage,
        nextChPage,
        setNextChPage,
        prevChPage,
        setPrevChPage,handleKey
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default UserProvider;
