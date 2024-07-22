import axios from "axios";
import { useUserContext } from "../providers/UserProvider";
import { useEffect } from "react";

const GetChannels = () => {
  const { channel, setListChannel, handleChannelPage,setNextChPage ,setPrevChPage} = useUserContext();
  /*   const API_KEY = "AIzaSyAqmAXnlj9Sn6cNIAT-HpOC8LzjGClu8r0"; */

  const API_KEY = "AIzaSyCqwMC8nrhsDfLP3jLfCcNBwPYAgj4SNOM";

  // const CHANNEL_ID = "UCmj4FxvlxPs4rD04uvF6BGA";

  useEffect(() => {
    const searcherChannel = async () => {
      if (channel || handleChannelPage) {
        axios
          .get("https://www.googleapis.com/youtube/v3/activities?", {
            //LLAMADA A LOS VIDEOS DE 1 CANAL DE YOUTUBE
            params: {
              part: "snippet",
              channelId: channel,
              key: API_KEY,
              pageToken: handleChannelPage,
              maxResults: 20,
            },
          })
          .then((res) => {
            setListChannel(res.data.items);
            console.log("GetChannels", res);
            console.log("res.data.nextPageToken", res.data.nextPageToken);
            setNextChPage(res.data.nextPageToken);
            console.log("res.data.prevPageToken", res.data.prevPageToken);
            setPrevChPage(res.data.prevPageToken);
          })
          .catch((error) => {
            console.error("Error fetching channel data", error.response);
            alert(
              `Error: ${error.response.status} - ${error.response.data.error.message}`
            );
          });
      }
    };
    searcherChannel();
  }, [channel, handleChannelPage]);
};

export default GetChannels;
