import { Fragment } from "react";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

const Home = () => {
  return (
    <Fragment>
      <div className="container--home">
        {/*       <VideoDetail /> */}
        <VideoList /> 
        <VideoList />
      </div>
    </Fragment>
  );
};

export default Home;
