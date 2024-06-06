import { Fragment } from "react";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

const Video_detail = () => {
  return (
    <Fragment>
      <div className="container--videodetail">
        <VideoDetail />
        <VideoList />
      </div>
    </Fragment>
  );
};

export default Video_detail;
