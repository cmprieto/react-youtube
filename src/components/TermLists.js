import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocalStorageContext } from "../providers/LocalStorageContext";
import { useUserContext } from "../providers/UserProvider";

const TermLists = () => {
  const [busquedas] = useLocalStorage("react-youtube", []);
  const { setDataYoutube, setTermFromSearchBar } = useUserContext();
  const { existTermInList, setExistTermInList, LimitTermsList } = useLocalStorageContext();

  const navigate = useNavigate();


  const checkexistTerm = (busqueda) => {
    //METODO SOME RESPONDE UN BOOLEANO SI SE CUMPLE UNA CONDICION
    return busquedas.some((obj) => obj.busqueda === busqueda);
  };


  const handleSubmitTermLists2 = ({ busqueda }) => {
    setTermFromSearchBar(busqueda); //volvemos a hacer la busqueda de term elegido
    setExistTermInList(checkexistTerm(busqueda));
    setDataYoutube(); //reseteo api
    if (existTermInList === false) {
      LimitTermsList(); //limita numero terms guardados
    }
  };



  const checkTerm = ({ busqueda }) => {
    handleSubmitTermLists2({ busqueda });
    navigate("/react-youtube/videodetail/");
  };

  return (
    <div className="term">
      <h1>Last searches</h1>
      <div className="termContainer">
        {busquedas &&
          busquedas.map(({ busqueda, url }, indice) => {
            if (indice < 10) {
              return (
                <div className="termContainer--list" key={"term" + indice}>
                  <img
                    src={url}
                    alt="thumbs"
                    className="termContainer--list--img"
                  />
                  <p className="termContainer--list--text">{busqueda}</p>
                  <button
                    type="button"
                    onClick={() => checkTerm({ busqueda })}
                    className="termContainer--list--button"
                  >
                    <p>cargar videos</p>
                  </button>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default TermLists;
