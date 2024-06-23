import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";

const GetChannelInformation = () => {
  const { channel, channelInformation, setChannelInformation } =
    useUserContext();
  /*   const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0"; */

  const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM";

  // const CHANNEL_ID = "UCmj4FxvlxPs4rD04uvF6BGA";

  useEffect(() => {
    const searcherChannelInfo = async () => {
      if (channel) {
        axios
          .get("https://www.googleapis.com/youtube/v3/channels?", {
            //LLAMADA A LOS VIDEOS DE 1 CANAL DE YOUTUBE
            params: {
              part: "snippet,statistics",
              id: channel,
              key: API_KEY,
            },
          })
          .then((res) => {
            setChannelInformation(res.data.items[0]);
            console.log("GetChannelInformation", res.data);
       //    alert("estoy haciendo una llamada a API");
          })
          .catch((error) => {
            console.error("Error fetching channel data", error.response);
            alert(
              `Error: ${error.response.status} - ${error.response.data.error.message}`
            );
          });
      }
    };
    searcherChannelInfo();
  }, [ channel]);
};

export default GetChannelInformation;
