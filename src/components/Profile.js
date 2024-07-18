import { useAuth0 } from "@auth0/auth0-react";
import { useLocalStorage } from "@uidotdev/usehooks";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [theme] = useLocalStorage("theme", "");
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={`profile${theme}`}>
        <img src={user.picture} alt={user.name} />
        <div className={`profile--profile${theme}`}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>{" "}
      </div>
    )
  );
};

export default Profile;
