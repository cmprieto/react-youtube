import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import lupa from "../assets/icon/buscar.png";

const Searchbar = () => {
  const { setTermFromSearchBar } = useUserContext();
  const [texto, setTexto] = useState();
  const handleChange = (e) => {
    setTexto(e.target.value);
    console.log(texto);
  };
  const handleSubmit = (e) => {
    console.log("texto", texto);
    setTermFromSearchBar(texto);
    e.preventDefault();
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit} className="searchbar--form">
        <input type="search" className="searchTerm" placeholder="Buscar" onChange={handleChange}/>
        <button type="submit" className="searchButton">
          <img src={lupa} alt="lupa" className="searchButton--lupa" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
