import React from "react";

/**
 * Renders a video player component with the given video path.
 *
 * @param {Object} _ref - The props object.
 * @param {string} _ref.videoPath - The path to the video file.
 * @throws {Error} If the videoPath value is not provided.
 * @return {JSX.Element} The video player component.
 */
export default function VideoFix({ videoPath }) {
  if (!videoPath) {
    throw new Error('[Vidfix] the videoPath value is mandatory.');
  }
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <video
          loop
          muted
          autoplay
          playsinline
        >
          <source src="${videoPath}" type="video/mp4"/>
        </video>
      `
    }}/>
  )
}