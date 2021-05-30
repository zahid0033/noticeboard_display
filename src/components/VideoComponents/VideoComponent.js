import { useState } from "react";
import ReactPlayer from "react-player";
import VideoLoader from "./VideoLoader";
const VideoComponent = ({ notice }) => {
  const [playing, setPlaying] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const handleOnReady = () => {
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  };
  return (
    <>
      <ReactPlayer
        height="100%"
        width="100%"
        muted
        onReady={handleOnReady}
        playing={playing}
        url={notice.materials[0].material}
        loop={true}
        style={{ position: "relative" }}
        onBufferEnd={() => setShowSpinner(false)}
        onBuffer={() => setShowSpinner(true)}
      />
      {showSpinner && (
        <div style={{ position: "fixed" }}>
          <VideoLoader />
        </div>
      )}
    </>
  );
};

export default VideoComponent;
