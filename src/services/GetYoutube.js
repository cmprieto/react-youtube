import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";

const GetYoutube = () => {
  const { setDataApiYoutube, termFromSearchBar } = useUserContext();

  const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM";   
/*     const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k";
 */ /*      const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0";   */
  
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
            setDataApiYoutube(res.data.items);
            console.log('res',res);
          //  alert("estoy haciendo una llamada a API");
          });
      }
    };
    searcher();
  }, [termFromSearchBar]); 

}
export default GetYoutube;
