import TermLists from "../components/TermLists";
import ChannelsVisited from "../components/ChannelsVisited";
import Profile from "../components/Profile";
const History = () => {
  return (
    <div className="historyContainer">
      <Profile/>
      <TermLists />
      <ChannelsVisited />
    </div>
  );
};

export default History;
