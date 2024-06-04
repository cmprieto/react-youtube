import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import lupa from "../assets/icon/buscar.png";

const Searchbar = () => {
  const { setTermFromSearchBar } = useUserContext();
  const [texto, setTexto] = useState();
  const busqueda = (e) => {
    setTexto(e.target.value);
  };
  const handleSubmit = () => {
    setTermFromSearchBar(texto);
  };
  return (
    <div className="searchbar">
      {/*  <form className="search" >
            <input type="search" placeholder="Search here..." required onChange={busqueda}/>
            <button type="button" onClick={handleSubmit}>Search</button>
        </form> */}
      <input
        type="search"
        className="searchTerm"
        placeholder="Buscar"
        onChange={busqueda}
      />
      <button type="button" className="searchButton" onClick={handleSubmit}>
        <img src={lupa} alt="lupa" className="searchButton--lupa"/>

    {/*    <i className="fa fa-search" aria-hidden="true"></i> */ }
      </button>
    </div>
  );
};

export default Searchbar;
