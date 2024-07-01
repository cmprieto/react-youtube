import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";

const GetYoutube = () => {
  const {
    setDataApiYoutube,
    setTermFromSearchBar,
    termFromSearchBar,
    page,
    setPage,
    i,
  } = useUserContext();


  const key = [
    "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM",
    "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k",
    "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0",
  ];

  const API_KEY = key[i];

/*  const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM"; */
  /*   const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k"; */
  /*       const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0";   */

  /*   if (page === "CAoQAA") {
    return upPage = "CAoQAA";
  }
console.log('upPage',upPage);
 */
  useEffect(() => {
    const searcher = async () => {
      if (termFromSearchBar) {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?", {
            params: {
              part: "snippet",
              maxResults: 15,
              q: termFromSearchBar,
              key: key[i],
              /*       pageToken: page, */
            },
          })
          .then((res) => {
            setDataApiYoutube(res.data.items);
            console.log("res", res);
            //  alert("estoy haciendo una llamada a API");
          });
      }
    };
    searcher();
    setPage(""); // RESETEAMOS PAGE PARA QUE CUANDO SE REPITA EL VALOR DE AVANZAR PG ACTÚE EL USEEFFECT.
  }, [termFromSearchBar, page]);
};
export default GetYoutube;
