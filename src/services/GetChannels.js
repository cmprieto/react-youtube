import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";

const GetChannels = () => {
  const { channel, setListChannel } = useUserContext();
  const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0";
 // const CHANNEL_ID = "UCmj4FxvlxPs4rD04uvF6BGA";

  useEffect(() => {
    const searcher = async () => {
      if (channel) {
        axios
          .get("https://www.googleapis.com/youtube/v3/activities?", {   //LLAMADA A LOS VIDEOS DE 1 CANAL DE YOUTUBE
            params: {
              part: "snippet",
              channelId: channel,
              key: API_KEY,
              maxResults: 25,
            },
          })
          .then((res) => {
            setListChannel(res.data.items);
            console.log("GetChannels", res);
            //  alert("estoy haciendo una llamada a API");
          });
      }
    };
    searcher();
  }, [channel]);
};

export default GetChannels;
