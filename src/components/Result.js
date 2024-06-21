import { Fragment } from "react";
import {useUserContext} from '../providers/UserProvider';
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import favo from "../assets/icon/fav.png";
import favSelected from "../assets/icon/fav--selected.png";


const Result = ({ videotoShow }) => {
  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);
  const VIDEO_ID = videotoShow.id.videoId;
  const { setChannel } = useUserContext();
  const deleteFavLocalStorage = () => {
   // alert("BORRO FAVORITO");
    setFavorito(
      favorito.filter((favoritos) => favoritos.id.videoId !== VIDEO_ID)
    );
  };
//LOGICA PARA MANEJO DE ESTADO (videotoShow.isFavorite) SI UN VIDEO ES FAVORITO, SE AÑADE AL LOCALSTORAGE Y SE QUITA SINO 
  const handleFav = () => {
    if (videotoShow.isFavorite === false) {
     // alert("AÑADO FAVORITO");
      //añadir favorito a localstorage solo si valor de favorito es true
      videotoShow.isFavorite = true;
      setFavorito([...favorito, videotoShow]);
    }
    else{
      videotoShow.isFavorite = false;
      deleteFavLocalStorage();
    }
  };

  const handleChannel=()=>{
    alert(videotoShow.snippet.channelId);
    setChannel(videotoShow.snippet.channelId);
  }
  
  return (
    <Fragment>
      <iframe
        id="player"
        type="text/html"
        className="videodetail--videocontainer--iframe"
        allowFullScreen
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
        frameborder="0"
      ></iframe>

      <div className="videodetail--videocontainer--subframe">
        <div className="videodetail--videocontainer--subframe--texto">
          <h1>{videotoShow.snippet.title}</h1>
          <p className="videodetail--videocontainer--subframe--texto--description">{videotoShow.snippet.description}</p>
         {/*  <p className="videodetail--videocontainer--subframe--texto--time"></p> */}
          <p className="videodetail--videocontainer--subframe--texto--channel">published by <Link to={`/react-youtube/channel/${videotoShow.snippet.channelId}`}>{videotoShow.snippet.channelTitle}</Link> in {new Date(videotoShow.snippet.publishTime).toLocaleDateString()}</p>
        </div>
        {videotoShow.isFavorite ? (
          <img src={favSelected} alt="favorito" onClick={handleFav} />
        ) : (
          <img src={favo} alt="NoFavorito" onClick={handleFav} />
        )}
        <button onClick={handleChannel}>Ver más videos de este canal</button>
      </div>
    </Fragment>
  );
};

export default Result;
