import axios from "axios";
import { useUserContext } from "../providers/UserProvider";

import { useEffect, useState } from "react";
const GetPlaylists = () => {
  const { channel, token } = useUserContext();
  const [playlists, setPlaylists] = useState();

  const API_KEY = "AIzaSyDOIgF-P8fWilqykKHvJkHsVFQbrWxWV-k";

  useEffect(() => {
    const searcherGetPlaylists = async () => {
      if (token) {
        axios
          .get("https://www.googleapis.com/youtube/v3/playlists?", {
            //LLAMADA A LOS VIDEOS DE 1 CANAL DE YOUTUBE
            params: {
              part: "snippet",
              key: API_KEY,
              mine: true,
              maxResults: 50,
            },
            headers: { Authorization: `Bearer ${token}` },
            //      headers: {
            // access_token:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjMzV3hkQ3VZNFJZSkJrUEgyNldPVSJ9.eyJpc3MiOiJodHRwczovL2Rldi04NTBqcjRmenAxcHNlNnFvLmV1LmF1dGgwLmNvbS8iLCJhdWQiOiJ6MnhFMnh6U095dk9vZ01mc0JEVkFFOU1vUElYU1czNyIsImlhdCI6MTcyMTQzMzM0MywiZXhwIjoxNzIxNDY5MzQzLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNzMyNjI4Nzc1ODg5MzYyNzg1NiIsInNpZCI6IjB0RnpFRUdGSFlRQmFHN2lKbng5VHpHdVNVY0lzQ21CIiwibm9uY2UiOiJURjlGUVZneGNVMDRVMFJuWlhJM2FUZGlNVXcxWTNaRVExWk1VVVpWWldWbFVFdzBiMlZJUmxkZlpBPT0ifQ.XBMDnADA8F-6bg4Flz-B8pq6Sqbx2EEjqeVK4tO8YAEhV2ygfvtYzo1Dd1HQTQErUkDujH7RNA43tCl-il4iiruQaRGFPJOfb9J-JSpt3jPlN7rtaI7dZ3J7iCi6MrUk47XWi1ZtOkkaosfXDP1oCw4RP-WsKyVJxMAN3HW3YEcOE_TAzgZBZlixgwfWarQd_PFHypoD6Va-daDSUpWG6toQ9GRUsO_k5uZdfvONS5VAJpPP3zWacINPtvU2y6Pe6OcGLHjuS-5T0P9PREjkoiZOr-0e89NARI36xbTa6fgCxaAUl5uy_8pxqzgkzqFqdVThd0yc4coC3CODnE6q4g,"
            // Authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjMzV3hkQ3VZNFJZSkJrUEgyNldPVSJ9.eyJpc3MiOiJodHRwczovL2Rldi04NTBqcjRmenAxcHNlNnFvLmV1LmF1dGgwLmNvbS8iLCJhdWQiOiJ6MnhFMnh6U095dk9vZ01mc0JEVkFFOU1vUElYU1czNyIsImlhdCI6MTcyMTQzMzM0MywiZXhwIjoxNzIxNDY5MzQzLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNzMyNjI4Nzc1ODg5MzYyNzg1NiIsInNpZCI6IjB0RnpFRUdGSFlRQmFHN2lKbng5VHpHdVNVY0lzQ21CIiwibm9uY2UiOiJURjlGUVZneGNVMDRVMFJuWlhJM2FUZGlNVXcxWTNaRVExWk1VVVpWWldWbFVFdzBiMlZJUmxkZlpBPT0ifQ.XBMDnADA8F-6bg4Flz-B8pq6Sqbx2EEjqeVK4tO8YAEhV2ygfvtYzo1Dd1HQTQErUkDujH7RNA43tCl-il4iiruQaRGFPJOfb9J-JSpt3jPlN7rtaI7dZ3J7iCi6MrUk47XWi1ZtOkkaosfXDP1oCw4RP-WsKyVJxMAN3HW3YEcOE_TAzgZBZlixgwfWarQd_PFHypoD6Va-daDSUpWG6toQ9GRUsO_k5uZdfvONS5VAJpPP3zWacINPtvU2y6Pe6OcGLHjuS-5T0P9PREjkoiZOr-0e89NARI36xbTa6fgCxaAUl5uy_8pxqzgkzqFqdVThd0yc4coC3CODnE6q4g",
            //       Authorization: `Bearer ${token}`,
            //  },
          })
          .then((res) => {
            /* setPlaylists(res.data.items); */
            setPlaylists(res);
            console.log("GetPlaylists", res);
            //  alert("estoy haciendo una llamada a API");
          })
          .catch((error) => {
            console.error("Error fetching channel data", error.response);
            alert(
              `Error: ${error.response.status} - ${error.response.data.error.message}`
            );
          });
      }
    };
    searcherGetPlaylists();
  }, [token]);
};

export default GetPlaylists;
