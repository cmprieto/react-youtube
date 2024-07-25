import TermLists from "../components/TermLists";
import ChannelsVisited from "../components/ChannelsVisited";
import Profile from "../components/Profile";
import SEO from "../services/SEO/SEO";
const History = () => {
  return (
    <div className="historyContainer">
      <SEO
        title="React Youtube | App por Carlos Prieto"
        description="Historial de Youtube realizada con React, historial de palabras de busqueda y canales visitados"
        keywords="youtube, youtube api, react youtube"
        name="Carlos Prieto"
        type="website"
        image="https://cmprieto.github.io/react-youtube/docs/screenshot.png"
      />
      <Profile />
      <TermLists />
      <ChannelsVisited />
    </div>
  );
};

export default History;
