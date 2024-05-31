import React from "react";

const VideoItem = ({ video }) => {

  return (
    <div>
   {video && <img src={video.snippet.thumbnails.default.url} alt="youtubethumbs"/>} 
     {video&&<p>{video.snippet.title}</p>} 
     {video&&<p>{video.snippet.channelTitle}</p>} 

    </div>
  );
};

export default VideoItem;
