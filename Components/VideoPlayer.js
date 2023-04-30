import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = ({
  url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  controls = true,
}) => {
  return (
    <ReactPlayer url={url} controls={controls} width="100%" height="70%" />
  );
};
