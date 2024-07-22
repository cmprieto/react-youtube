import { useAuth0 } from "@auth0/auth0-react";
import { useLocalStorage } from "@uidotdev/usehooks";
import {useUserContext} from '../providers/UserProvider';
import { useState } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading ,getAccessTokenWithPopup,getIdTokenClaims,getAccessTokenSilently } = useAuth0();
  const [theme] = useLocalStorage("theme", "");
  const [userMetadata, setUserMetadata] = useState(null);
  const { setToken } = useUserContext();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  /*OBTENER TOKEN PARA API YOUTUBE*/

  const getToken = async () => {    //uso 2 metodos para token pero...no los da válidos google
    try {
      const token = await getAccessTokenWithPopup();
      const token2=await getIdTokenClaims();
/*         {
        authorizationParams: {
          audience: 'https://www.googleapis.com/youtube/v3/',
          scope: 'https://www.googleapis.com/auth/youtube.readonly',  
        },
      }); */
      setToken(token);
      console.log("Token:", token);
      console.log("Token2:", token2);

    } catch (error) {
      console.error("Error obtaining token:", error);
    }
  };
  return (
    isAuthenticated && (
      <div className={`profile${theme}`}>
        <img src={user.picture} alt={user.name} />
        <div className={`profile--profile${theme}`}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        </div>{" "}
        <button onClick={ getToken}>Get Token</button>
      </div>
    )
  );
};

export default Profile;
