import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect, useState } from "react";

const GetRecommended = () => {
  const { termFromSearchBar ,getRecommended, setGetRecommended} = useUserContext();


  const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k";

  useEffect(() => {
    const searcher = async () => {
      if (!termFromSearchBar) {
        axios
          .get("https://www.googleapis.com/youtube/v3/videos?", {
            params: {
              part: "snippet",
              chart: "mostPopular",
              key: API_KEY,
              
            },
          })
          .then((res) => {
            setGetRecommended(res.data.items);
            console.log("GetRecommended", res.data.items);
          });
      }
    };
    searcher();
  }, []);
};

export default GetRecommended;
