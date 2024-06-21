import { Fragment } from "react";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import VideoListChannel from "../components/VideoListChannel";

const Video_detail = () => {
  return (
    <Fragment>
      <div className="container--videodetail">
        <VideoDetail />
        <VideoList />
        <VideoListChannel/>
      </div>
    </Fragment>
  );
};

export default Video_detail;
