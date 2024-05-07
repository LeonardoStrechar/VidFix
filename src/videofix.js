import React from "react";
import PropTypes from "prop-types";

const VideoFix = ({ videoPath }) => (
  <div>
    <h1>{videoPath}</h1>
  </div>
);


VideoFix.propTypes = {
  videoPath: PropTypes.string
};

export default VideoFix;