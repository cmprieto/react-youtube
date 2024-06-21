import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect, useState } from "react";

const GetComments = () => {
  const { termFromSearchBar } = useUserContext();
  const [comments, setComments] = useState();

  const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k";

  useEffect(() => {
    const searcher = async () => {
      if (termFromSearchBar) {
        axios
          .get("https://www.googleapis.com/youtube/v3/videos?", {
            params: {
              part: "snippet, statistics, player",
              key: API_KEY,
              parentId: "UgzDE2tasfmrYLyNkGt4AaABAg",
            },
          })
          .then((res) => {
            setComments(res.data.items);
            console.log("comments", res);
            //  alert("estoy haciendo una llamada a API");
          });
      }
    };
    searcher();
  }, [termFromSearchBar]);
};

//GET https://youtube.googleapis.com/youtube/v3/comments?part=snippet&maxResults=10&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=[YOUR_API_KEY] HTTP/1.1

export default GetComments;
