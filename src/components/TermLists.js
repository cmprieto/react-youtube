import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocalStorageContext } from "../providers/LocalStorageContext";


const TermLists = () => {
  const [busquedas] = useLocalStorage("react-youtube", []);
  const { handleSubmitTermLists, } = useLocalStorageContext();
  const navigate = useNavigate();


const checkTerm=({busqueda})=>{
  handleSubmitTermLists({ busqueda });
  navigate("/react-youtube/videodetail/");
}

  return (
    <div className="term">
      <h1>Last searches</h1>
      <div className="termContainer">
        {busquedas &&
          busquedas.map(({ busqueda, url }, indice) => {
            if (indice < 10) {
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
                    onClick={() => checkTerm({ busqueda })}
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
