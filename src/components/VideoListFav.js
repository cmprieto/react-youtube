import {useUserContext} from '../providers/UserProvider';
import {useLocalStorage} from '@uidotdev/usehooks';
import {useEffect, useState} from 'react';
import VideoItem from './VideoItem';

const VideoListFav = () => {
    const {termFromSearchBar } = useUserContext();
    const [favorito, setFavorito] = useLocalStorage("favoritos-youtube", []);
    const [urlthumb, setUrlthumb] = useState("");
    const[listado, setListado]=useState([]);
  /*
    useEffect(() => {
      const listar = async () => {
        if (favorito) {
          alert("realizar busqueda"); 
          /* setUrlthumb(dataYoutube[0].snippet.thumbnails.default.url); */ /*  ---> NO FUNCIONA PQ NO PUEDES MANEJAR VALOR DEL ESTADO ACTUALIZADO HASTA Q TERMINA DE RENDERIZAR TODO EL COMPONENTE */
          //PARA PODER MANEJAR EL ESTADO UNA VEZ ACTUALIZADO ANTES DE QUE FINALICE EL RENDERIZADO DEL COMPONENTE HAY QUE HACERLO ASI
   /*       setUrlthumb((prevState) => {
            const newState = favorito[0].snippet.thumbnails.default.url;
            // Hacer algo con el nuevo estado aquí si es necesario
           // urlthumb && update(newState);
            console.log("New State:", newState);
            return newState;
          });
        }
      };
      listar(); // MANEJO FUNCION SIENDO ESTA ASINCRONA
    }, [favorito]);*/
  
const updatelistado=(item)=>{
    setListado([...listado, item]);
}

    return (
      <div className="videolistFav">
        {favorito &&
          favorito.map((item, index) => {
            return (
              <div className="videoitem" key={index}>
             <VideoItem video={item} /> 

              </div>
            );
          })}
      </div>
    );
  };
  

export default VideoListFav