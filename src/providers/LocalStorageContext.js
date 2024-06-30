import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useUserContext } from "./UserProvider";

const AppContext = createContext();
export const useLocalStorageContext = () => useContext(AppContext);

const LocalStorageContext = ({ children }) => {
  //ESTADOS
  const [existTermInList, setExistTermInList] = useState(false);
  const [busquedas] = useLocalStorage("react-youtube", []);
  const { setTermFromSearchBar, setDataYoutube } = useUserContext();

  //METODOS DEL LOCALSTORAGE

  //LIMITAMOS ARRAY A 10 EN LOCALSTORAGE DE TERMS BUSCADOS EN YOUTUBE
  const LimitTermsList = () => {
    let terms = localStorage.getItem("react-youtube");
    console.log("Before modification:", terms); //LIMITAMOS ARRAY A 10 EN LOCALSTORAGE
    if (terms) {
      terms = JSON.parse(terms);
      console.log("Parsed terms:", terms);
      if (terms.length > 9) {
        terms.splice(9, 1);
        console.log("After splicing:", terms); // Verificar el array modificado
      }
      const updateTerms = JSON.stringify(terms);
      localStorage.setItem("react-youtube", updateTerms);
      console.log("Updated terms in localStorage:", updateTerms);
    }
  };

  // METODO LIMITAR NUMERO DE ITEMS EN CHANNELS VISITED A 12 y poder GRABAR NUEVOS

  const LimitArrayChannelsFav = () => {
    let channels = localStorage.getItem("channels-react-youtube");
    if (channels) {
      channels = JSON.parse(channels);
      if (channels.length > 12) {
        //  alert("voy a borrarrrrr");
        channels.splice(12, 1);
      }
      const updatedChannels = JSON.stringify(channels);
      localStorage.setItem("channels-react-youtube", updatedChannels);
      console.log("channels-react-youtube", updatedChannels);
    } else {
      console.log(
        "No hay datos almacenados bajo la clave 'channels-react-youtube'"
      );
    }
  };

  //METODOS CONTROL REPETICION TERMLISTS PALABRAS DE BUSQUEDA, NO SE REPITA

  const checkexistTerm = (busqueda) => {
    //METODO SOME RESPONDE UN BOOLEANO SI SE CUMPLE UNA CONDICION
    return busquedas.some((obj) => obj.busqueda === busqueda);
  };

  
  const handleSubmitTermLists = ({ busqueda }) => {
    setExistTermInList(checkexistTerm(busqueda));
    setDataYoutube(); //reseteo api
    if (existTermInList === false) {
      LimitTermsList(); //limita numero terms guardados
    }
    setTermFromSearchBar(busqueda); //volvemos a hacer la busqueda de term elegido
    // navigate("/react-youtube/videodetail/");
  };

  return (
    <AppContext.Provider
      value={{
        LimitTermsList,
        LimitArrayChannelsFav,
        existTermInList,
        setExistTermInList,
        handleSubmitTermLists,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default LocalStorageContext;
