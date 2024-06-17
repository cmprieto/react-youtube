import { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [dataApiYoutube, setDataApiYoutube] = useState();
  const [dataYoutube, setDataYoutube] = useState();   // añado nuevo estado donde incluyo datos extraidos de API y añado estado isFavorite como booleano
  const [termFromSearchBar, setTermFromSearchBar] = useState("");
  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);



  // HELPERS

  //REVISA RESULTADO LISTADO DE VIDEOS SE ENCUENTRA EN LOCALSTORAGE
  //Y SI ES ASI AÑADIR TRUE AL NUEVO ESTADO --> MEDIANTE USEEFFECT

  const isFav = () => {
    const addIsFavoriteToAPI = dataApiYoutube.map((item, i) => {
      const existe = favorito.some((dataApiYoutube) => item.etag === dataApiYoutube.etag); //METODO SOME DEVUELVE UN BOOLEANO SI AL MENOS UNA VEZ SE CUMPLA LA CONDICION
      /* console.log("existe", existe); */      
      return { ...dataYoutube, ...item, isFavorite: existe };
    });
    console.log("nuevosdatos", addIsFavoriteToAPI);
    setDataYoutube(addIsFavoriteToAPI);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default UserProvider;
