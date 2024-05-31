import { Fragment } from "react";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";

const Home = () => {
  return (
    <Fragment>
      <VideoDetail />
      <VideoList />
    </Fragment>
  );
};

export default Home;
