import { useState } from "react";
import { useLocalStorageContext } from "../providers/LocalStorageContext";
import { useNavigate } from "react-router-dom";
import lupa from "../assets/icon/buscar.png";
import { useUserContext } from "../providers/UserProvider";


const Searchbar = () => {
  const { setTermFromSearchBar,theme } = useUserContext();
  const { handleSubmitTermLists} = useLocalStorageContext();
  const [busqueda, setBusqueda] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    handleSubmitTermLists(busqueda); //MECANISMOS CONTROL
    setTermFromSearchBar(busqueda);
    navigate("/react-youtube/videodetail/"); 
    e.preventDefault();
  };

  return (
    <div className="searchbar">
      <form
        onSubmit={handleSubmit}
        className="searchbar--form"
        id="buscador"
        name="buscador"
      >
        <input
          type="search"
          className={`searchTerm${theme}`}
          placeholder="Search"
          onChange={handleChange}
          id="inputbuscador"
        />
        <button type="submit" className={`searchButton${theme}`}>
          <img src={lupa} alt="lupa" className="searchButton--lupa" />
        </button>
      </form>

    </div>
  );
};

export default Searchbar;
