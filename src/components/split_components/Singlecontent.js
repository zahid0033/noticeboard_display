import { useState } from "react";
import ReactPlayer from "react-player";

export default function Singlecontent({ notice }) {
  const [playing, setPlaying] = useState(false);
  const handleOnReady = () => {
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  };
  return (
    <>
      {notice?.materials[0]?.materialtype === "Image" && (
        <img
          className="img-fluid rounded d-block"
          src={notice.materials[0].material}
          alt=""
        />
      )}
      {notice?.materials[0]?.materialtype === "Text" && (
        <h1>{notice.materials[0].material}</h1>
      )}
      {notice?.materials[0]?.materialtype === "Video" && (
        <ReactPlayer
          muted
          onReady={handleOnReady}
          playing={playing}
          url={notice.materials[0].material}
          loop={true}
        />
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
