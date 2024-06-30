import { useState } from "react";
import { useLocalStorageContext } from "../providers/LocalStorageContext";
import { useNavigate } from "react-router-dom";
import lupa from "../assets/icon/buscar.png";

const Searchbar = () => {

  const { handleSubmitTermLists } =
    useLocalStorageContext();
  const [busqueda, setBusqueda] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  
  const handleSubmit = (e) => {
    handleSubmitTermLists({ busqueda });
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
          className="searchTerm"
          placeholder="Search"
          onChange={handleChange}
          id="inputbuscador"
        />
        <button type="submit" className="searchButton">
          <img src={lupa} alt="lupa" className="searchButton--lupa" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
