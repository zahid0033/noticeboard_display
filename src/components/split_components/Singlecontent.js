import { useState } from "react";
import ReactPlayer from "react-player";

export default function Singlecontent({ notice }) {
  const [playing, setPlaying] = useState(false);
  const [showSpinner, setShowSpinner] = useState();
  const handleOnReady = () => {
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  };
  return (
    <>
      {notice?.materials[0]?.materialtype === "Image" && (
        <img src={notice.materials[0].material} alt="" />
      )}
      {notice?.materials[0]?.materialtype === "Text" && (
        <pre>{notice.materials[0].material}</pre>
      )}
      {notice?.materials[0]?.materialtype === "Video" && (
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
              <p>loading</p>
            </div>
          )}
        </>
      )}
      {/* <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <img
          src="https://i.ibb.co/dr0tvG7/The-World-Bank-Logo.png"
          alt=""
          style={{ width: "100px", borderRadius: "50%" }}
        />
      </div> */}
    </>
  );
}
