import { Fragment, useEffect, useState } from "react";
import favo from "../assets/icon/fav.png";
import { useUserContext } from "../providers/UserProvider";
import { useLocalStorage } from "@uidotdev/usehooks";
import favSelected from "../assets/icon/fav--selected.png";

const Result = ({ videotoShow }) => {
  const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);

  const VIDEO_ID = videotoShow.id.videoId;
  const { dataYoutube } = useUserContext(); //DATOS ERRONEOS
  const [isFavLocal, setIsFavLocal] = useState(videotoShow.isFavorite);

  useEffect(() => {
    videotoShow && setIsFavLocal(videotoShow.isFavorite);
  }, [videotoShow]);

  //const [videoShow, setVideoShow] = useState({ ...videotoShow, fav: {favVideo} }); //ERROR PQ ASUMES NO ESTA EN LOCALSTORAGE --->>ESTE DATO YA LO TENEMOS AÑADIDO EN VIDETOSHOW

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
    alert("BORRO FAVorito");
    setFavorito(
      favorito.filter((favoritos) => favoritos.id.videoId !== VIDEO_ID)
    );
  };

  const handleFav = () => {
    if (isFavLocal === false) {
      alert("AÑADO FAVorito");
      //añadir solo favorito a localstorage si valor de favorito es true
      setIsFavLocal(true);
      setFavorito([...favorito, videotoShow]);
    }
    else{
      setIsFavLocal(false);
      deleteFavRepetead();
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
        {isFavLocal ? (
          <img src={favSelected} alt="favorito" onClick={handleFav} />
        ) : (
          <img src={favo} alt="NoFavorito" onClick={handleFav} />
        )}

      </div>
      <button type="button" /* onClick={deleteFav} */>borrar falsos</button>
      <button type="button" /*  onClick={deleteFavRepetead} */>
        borrar repetidos
      </button>
    </Fragment>
  );
};

export default Result;
