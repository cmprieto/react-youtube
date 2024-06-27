import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import {useLocalStorageContext} from '../providers/LocalStorageContext';
import lupa from "../assets/icon/buscar.png";

const Searchbar = () => {
  const { setTermFromSearchBar, setDataYoutube } = useUserContext();
  const { LimitTermsList } = useLocalStorageContext();
  const [texto, setTexto] = useState();

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("texto", texto);
    setDataYoutube();
    LimitTermsList();
    setTermFromSearchBar(texto);
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
