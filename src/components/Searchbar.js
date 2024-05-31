import { useState } from "react";
import {useUserContext} from "../providers/UserProvider";

const Searchbar = () => {
    const {setTermFromSearchBar} = useUserContext();
    const [texto,setTexto]=useState();

    const busqueda=(e)=>{
        setTexto(e.target.value);
    }

    const sendSearch=()=>{
        setTermFromSearchBar(texto);
    }
  return (
    <div className='searchbar'>
        <form className="search" >
            <input type="search" placeholder="Search here..." required onChange={busqueda}/* onChange={e=>setTermFromSearchBar(e.target.value)} *//>
            <button type="button" onClick={sendSearch}>Search</button>
        </form>   
  </div>
  )
}

export default Searchbar