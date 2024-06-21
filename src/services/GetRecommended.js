import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect, useState } from "react";

const GetRecommended = () => {
  const { termFromSearchBar } = useUserContext();
  const [getRecommended, setGetRecommended] = useState();

  const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k";

  useEffect(() => {
    const searcher = async () => {
      if (termFromSearchBar) {
        axios
          .get("https://www.googleapis.com/youtube/v3/videos?", {
            params: {
              part: "snippet",
              chart: "mostPopular",
              key: API_KEY,
              
            },
          })
          .then((res) => {
            setGetRecommended(res.data);
            console.log("GetRecommended", res);
            //  alert("estoy haciendo una llamada a API");
          });
      }
    };
    searcher();
  }, [termFromSearchBar]);
};

export default GetRecommended;
