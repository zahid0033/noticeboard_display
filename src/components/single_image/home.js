import React from "react";
import ReactPlayer from "react-player";

const SingleImage = ({ notice }) => {
  const [playing, setPlaying] = useState(false);
  const handleOnReady = () => {
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  };
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "100%", position: "relative" }}>
        {notice?.materials[0]?.materialtype === "Image" && (
          <img
            src={notice.materials[0].material}
            alt=""
            style={{
              height: "100%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        )}
        {notice?.materials[0]?.materialtype === "Text" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1>{notice.materials[0].material}</h1>
          </div>
        )}
        {notice?.materials[0]?.materialtype === "Video" && (
          <ReactPlayer
            width="100%"
            height="100%"
            muted={!update}
            onReady={handleOnReady}
            playing={playing}
            url={notice.materials[0].material}
            loop={true}
            style={{
              height: "100%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        )}
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <img
            src="https://i.ibb.co/dr0tvG7/The-World-Bank-Logo.png"
            alt=""
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
