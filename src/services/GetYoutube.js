import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";

const GetYoutube = () => {
  const { setDataYoutube, termFromSearchBar } = useUserContext();

 /*  const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM"; */
 /*  const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k"; */
  const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0";

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
        console.log(res.data.items);
      });
  }, [termFromSearchBar]);
};

export default GetYoutube;
