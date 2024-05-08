"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VideoFix;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Renders a video player component with the given video path.
 *
 * @param {Object} _ref - The props object.
 * @param {string} _ref.videoPath - The path to the video file.
 * @throws {Error} If the videoPath value is not provided.
 * @return {JSX.Element} The video player component.
 */
function VideoFix(_ref) {
  var videoPath = _ref.videoPath;
  if (!videoPath) {
    throw new Error('[Vidfix] the videoPath value is mandatory.');
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: "\n        <video\n          loop\n          muted\n          autoplay\n          playsinline\n        >\n          <source src=\"".concat(videoPath, "\" type=\"video/mp4\"/>\n        </video>\n      ")
    }
  });
}