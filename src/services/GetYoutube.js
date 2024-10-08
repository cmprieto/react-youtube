import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocalStorageContext } from "../providers/LocalStorageContext";

const GetYoutube = () => {
  const {
    setDataApiYoutube,
    termFromSearchBar,
    handlePage,
    indexApi,
    setPrevPage,
    setNextPage,
  } = useUserContext();
  const { existTermInList } = useLocalStorageContext();
  const [busquedas, setBusquedas] = useLocalStorage("react-youtube", []);

  const key = [
    "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM",
    "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k",
    "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0",
  ];
  const API_KEY = key[indexApi];

  /* const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM"; */
  /*  const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k"; */
  /*  const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0";   */

  useEffect(() => {
    const searcher = async () => {
      if (termFromSearchBar || handlePage) {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?", {
            params: {
              part: "snippet",
              maxResults: 10,
              q: termFromSearchBar,
              key: key[indexApi],
              pageToken: handlePage,
            },
          })
          .then((res) => {
            setDataApiYoutube(res.data.items);
            console.log("res", res);
            const firstItem = res.data.items[0];
            const thumbnails = firstItem.snippet.thumbnails.default.url;
            /* EXTRAEMOS VALOR DE TOKENS PARA PAGINAS +/- DE RESULTADOS DE BUSQUEDA */
            res.data.nextPageToken && setNextPage(res.data.nextPageToken);
            res.data.prevPageToken && setPrevPage(res.data.prevPageToken);

            !existTermInList &&
              setBusquedas([
                { busqueda: termFromSearchBar, url: thumbnails },
                ...busquedas,
              ]); //GRABO BUSQUEDA Y MINIATURA EN LOCASTORAGE
          });
      }
    };
    searcher();
    console.log("page", handlePage);
    // setPage(""); // RESETEAMOS PAGE PARA QUE CUANDO SE REPITA EL VALOR DE AVANZAR PG ACTÚE EL USEEFFECT.
  }, [handlePage, termFromSearchBar]);
};
export default GetYoutube;
