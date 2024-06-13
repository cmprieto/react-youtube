import { useUserContext } from "../providers/UserProvider";
import { useLocalStorage } from "@uidotdev/usehooks";

const TermLists = () => {
  const [ busquedas ] = useLocalStorage("react-youtube", []);

  return (
    <div className="termContainer">
      <h1>Last searches</h1>
         {busquedas&&busquedas.map(( {busqueda,url} , indice) => {
        return (
          <div className="termContainer" key={indice}>
            <img src={url} alt="thumbs" className="termContainer--img"/>
            <p className="termContainer--text">{busqueda}</p> 
     </div>
        );
      })}  
    </div>
  );
};

export default TermLists;
