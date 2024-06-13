import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import lupa from "../assets/icon/buscar.png";
import { useLocalStorage } from "@uidotdev/usehooks";

const Searchbar = () => {
  const { setTermFromSearchBar, setDataYoutube } = useUserContext();
  const [texto, setTexto] = useState();/* 
  const [busquedas, setBusquedas] = useLocalStorage("react-youtube", []); */

  const handleChange = (e) => {
    setTexto(e.target.value);
    console.log(texto);
  };


  const handleSubmit = (e) => {
    console.log("texto", texto);
    setDataYoutube();
   /*  setBusquedas([...busquedas, texto /* , "url": 'url' *//*]); */
    /*    addHistory(texto); */
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
          placeholder="Buscar"
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
