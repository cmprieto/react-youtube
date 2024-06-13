import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect, useState } from "react";

const GetYoutube = () => {
  const { setDataYoutube, termFromSearchBar } = useUserContext();
/* const [lastSearch, setLastSearch]=useState(); */
 /*  const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM";   */
 /*    const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k"; */
      const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0";  
  
  useEffect(() => {
    const searcher = async () => {
      if (termFromSearchBar) {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?", {
            params: {
              part: "snippet",
              maxResults: 5,
              q: termFromSearchBar,
              key: API_KEY,
            },
          })
          .then((res) => {
            setDataYoutube(res.data.items);
            console.log('res',res);
          /*   setLastSearch(res.data.items[0].snippet.thumbnails.default.url); */
          //  alert("estoy haciendo una llamada a API");
          });
      }
    };
    searcher();
    
    //additem aqui pasando paramentros a metodo de contexto?? no se si se ha actualizdo el estado 

  }, [termFromSearchBar]); 
/* 
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?", {
        params: {
          part: "snippet",
          maxResults: 5,
          q: termFromSearchBar,
          key: API_KEY,
        },
      })
      .then((res) => {
        setDataYoutube(res.data.items);
      // setLastSearch(res.data.items.dataYoutube[0].snippet.thumbnails.default.url);
        alert("estoy haciendo una llamada a API");
      });
  }, [termFromSearchBar]);
}; */
}
export default GetYoutube;
