import { useUserContext } from "../providers/UserProvider";
import { useLocalStorage } from "@uidotdev/usehooks";

const TermLists = () => {
  const [busquedas] = useLocalStorage("react-youtube", []);
  const { handleSubmitTermLists } = useUserContext();

   /* const handleSubmit3 = ({ busqueda }) => {
    //setDataYoutube();         //RESETEAMOS ESTADO API EN CADA NUEVA BUSQUEDA
    setTermFromSearchBar(busqueda);
  };
 */
  return (
    <div className="term">
      <h1>Last searches</h1>
      <div className="termContainer">
        {busquedas &&
          busquedas.map(({ busqueda, url }, indice) => {
            if (indice < 5) {
              return (
                <div className="termContainer--list" key={indice}>
                  <img
                    src={url}
                    alt="thumbs"
                    className="termContainer--list--img"
                  />
                  <p className="termContainer--list--text">{busqueda}</p>
                  <button
                    type="button"
                    onClick={() => handleSubmitTermLists({ busqueda })}
                    className="termContainer--list--button"
                  >
                    <p>cargar videos</p>
                  </button>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default TermLists;
