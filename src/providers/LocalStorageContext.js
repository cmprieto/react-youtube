import { createContext, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const AppContext = createContext();
export const useLocalStorageContext = () => useContext(AppContext);

const LocalStorageContext = ({ children }) => {
  //ESTADOS

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

  return (
    <AppContext.Provider
      value={{
        LimitTermsList,
        LimitArrayChannelsFav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default LocalStorageContext;
