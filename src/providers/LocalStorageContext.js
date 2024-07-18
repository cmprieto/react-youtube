import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useUserContext } from "./UserProvider";

const AppContext = createContext();
export const useLocalStorageContext = () => useContext(AppContext);

const LocalStorageContext = ({ children }) => {
  //ESTADOS
  const [existTermInList, setExistTermInList] = useState(false);
  const [busquedas] = useLocalStorage("react-youtube", []);
  const { setDataYoutube } = useUserContext();
  const [urlthumb, setUrlthumb] = useState("");
  const [newObjectTerm, setNewObjectTerm] = useState();
  const [theme, setTheme] = useLocalStorage("theme","");
  //METODOS DEL LOCALSTORAGE

  // METODO LIMITAR NUMERO DE ITEMS EN CHANNELS VISITED A 12 y poder GRABAR NUEVOS

  const LimitArrayChannelsFav = () => {
    let channels = localStorage.getItem("channels-react-youtube");
    if (channels) {
      channels = JSON.parse(channels);
      if (channels.length > 12) {
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

  //LIMITAMOS ARRAY A 10 EN LOCALSTORAGE DE TERMS BUSCADOS EN YOUTUBE

  const LimitTermsList = () => {
    let terms = localStorage.getItem("react-youtube");
    console.log("Before modification:", terms); //LIMITAMOS ARRAY A 10 EN LOCALSTORAGE
    if (terms) {
      terms = JSON.parse(terms);
      console.log("Parsed terms:", terms);
      if (terms.length > 9) {
        // alert('voy a borrar 1 item de local storage');
        terms.splice(9, 1);
        console.log("After splicing:", terms); // Verificar el array modificado
      }
      const updateTerms = JSON.stringify(terms);
      localStorage.setItem("react-youtube", updateTerms); //NO FUNCIONA NO GRABA¿seguro o es q no hay nada q añadir?
      console.log("Updated terms in localStorage:", updateTerms);
    } else {
      console.log("No hay datos almacenados bajo la clave 'react-youtube'");
    }
  };

  //METODOS CONTROL REPETICION TERMLISTS PALABRAS DE BUSQUEDA, NO SE REPITA

  const checkexistTerm = (busqueda) => {
    //METODO OK
    //METODO SOME RESPONDE UN BOOLEANO SI SE CUMPLE UNA CONDICION
    return busquedas.some((obj) => obj.busqueda === busqueda);
  };

  const handleSubmitTermLists = (busqueda) => {
    //METODO OK
    const checkTerm = checkexistTerm(busqueda);
    //alert(checkTerm);
    setExistTermInList(checkTerm);
    setDataYoutube(); //reseteo api

    if (checkTerm === false) {
      LimitTermsList(); //limita numero terms guardados
      //alert("no existe en term list"); //METODO OK
    } else {
      //alert("ya existe en term list"); //METODO OK
    }
  };

  const updates = (busqueda) => {
    if (existTermInList === false) {
      //sino existe se añade a localStorage
      // alert("sino existe se añade a localStorage");
      setNewObjectTerm({ busqueda: busqueda, url: urlthumb });
      console.log("newObjectTerm", newObjectTerm);
    } else {
      setExistTermInList(false);
      //si existe no se añade y reseteo
      //alert("TERM EXISTE Y NO SE AÑADE Y RESETEO setExistTermInList(false");
    }
  };

  return (
    <AppContext.Provider
      value={{
        LimitTermsList,
        LimitArrayChannelsFav,
        existTermInList,
        setExistTermInList,
        handleSubmitTermLists,
        urlthumb,
        setUrlthumb,
        updates,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default LocalStorageContext;
