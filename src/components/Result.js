import { Fragment, useEffect, useState } from "react";
import fav from "../assets/icon/fav.png";
import { useUserContext } from "../providers/UserProvider";
import { useLocalStorage } from "@uidotdev/usehooks";

const Result = ({ videotoShow }) => {
  const VIDEO_ID = videotoShow.id.videoId;
  /*   console.log(VIDEO_ID);*/
  const { favVideo, setFavVideo } = useUserContext();
  const [videoShow, setVideoShow] = useState({ ...videotoShow, fav: {favVideo} }); //ERROR PQ ASUMES NO ESTA EN LOCALSTORAGE
 
  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);

  /*   const deleteItem = (id) => {
    setCarrito(carrito.filter((product) => product.id !== id));
  };
 */
/* 
  useEffect(() => {
      if(localStorage.getItem(favorito.id.videoId)!=null){
        setVideoShow({ ...videoShow, fav: true });
      }
  }, []);
   */
  /* 
  
  const deleteFav = () => {
    setFavorito(favorito.filter((favoritos) => favoritos.fav !== false));
  };

 */ 
const deleteFavRepetead = () => {
    alert("ojo hay repetidos");
    setFavorito(
      favorito.filter((favoritos) => favoritos.id.videoId !== VIDEO_ID)
    );
  };

  const handleFav = () => {
    if (favVideo === false) {
      setFavVideo(true);
 /*      deleteFavRepetead(); */
    }

    if (favVideo === true) {
      //añadir solo favorito a localstorage si valor de favorito es true
      setFavVideo(false);
      setFavorito([...favorito, videoShow]);
    }
  };

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
          <p>{videotoShow.snippet.description}</p>
        </div>
        <img src={fav} alt="favorito"  onClick={handleFav} ></img>
      </div>
      <button type="button" /* onClick={deleteFav} */>
        borrar falsos
      </button>
      <button type="button"/*  onClick={deleteFavRepetead} */>
        borrar repetidos
      </button>
    </Fragment>
  );
};

export default Result;
