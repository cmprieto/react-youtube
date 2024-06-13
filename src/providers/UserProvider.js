import { createContext, useState, useContext } from "react";


const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [dataYoutube, setDataYoutube] = useState();
  const [termFromSearchBar, setTermFromSearchBar]=useState('indurain');

/*   const [urlthumb,setUrlthumb] =useState(''); */


/*   const [busquedas, setBusquedas] = useLocalStorage([{"Busquedas":'', "url":''}]); */


// HELPERS
/* const addHistory=(texto)=>{
  setUrlthumb(dataYoutube[0].snippet.thumbnails.default.url); 
  console.log('urlthumb',urlthumb);
  console.log('texto',texto);
  setBusquedas([...busquedas,{ "Busqueda": texto, "url": urlthumb }]);
} */

  return (
    <AppContext.Provider value={{dataYoutube, setDataYoutube,termFromSearchBar,setTermFromSearchBar}}>
      {children}
    </AppContext.Provider>
  );
};
export default UserProvider;
