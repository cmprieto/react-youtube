import { createContext, useState, useContext } from "react";



const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [dataYoutube, setDataYoutube] = useState();
  const [termFromSearchBar, setTermFromSearchBar]=useState('');


  return (
    <AppContext.Provider value={{dataYoutube, setDataYoutube,termFromSearchBar,setTermFromSearchBar}}>
      {children}
    </AppContext.Provider>
  );
};
export default UserProvider;
