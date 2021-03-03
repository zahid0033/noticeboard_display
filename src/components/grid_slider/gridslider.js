import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function GridSlider({ notice, update, logo }) {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState(notice?.interval);
  const [playing, setPlaying] = useState(false);
  const handleOnReady = () => {
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  };
  useEffect(() => {
    let changeSlide = setTimeout(() => {
      if (
        idx === notice.materials.length - 3 ||
        idx === notice.materials.length - 2 ||
        idx === notice.materials.length - 1
      ) {
        setIdx(0);
      } else {
        setIdx((d) => d + 3);
      }
    }, Number(notice.interval) * 1000);
    return () => clearTimeout(changeSlide);
  }, [notice.materials.length, idx, notice.interval]);

  useEffect(() => {
    let countDown = setInterval(() => {
      if (time === 1) {
        setTime(notice?.interval);
      } else {
        setTime((t) => t - 1);
      }
    }, 1000);
    setIdx(0);
    return () => clearInterval(countDown);
  }, [notice?.interval, time]);

  return (
    <>
      <nav
        className=" container-fluid navbar navbar-expand-lg"
        style={{ background: "rgba(0,0,0,0)",position:'absolute' }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="" width="30" height="24" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <span className="navbar-text">
            Playing {idx + 1} of {notice?.materials?.length / 3}
          </span>
          <span className="navbar-text">{time}</span>
        </div>
      </nav>
      <div className="grid-slider">
        <div className="item">
          {notice?.materials[idx]?.materialtype === "Video" && (
            <ReactPlayer
              width="100%"
              height="100%"
              muted={true}
              onReady={handleOnReady}
              playing={playing}
              url={notice?.materials[idx].material}
              loop={true}
            />
          )}
          {notice?.materials[idx]?.materialtype === "Image" && (
            <img
              src={notice?.materials[idx].material}
              alt={notice?.materials[idx].name}
            />
          )}
          {notice?.materials[idx]?.materialtype === "Text" && (
            <h1>{notice?.materials[idx].material}</h1>
          )}
        </div>
        <div className="item">
          {notice?.materials[idx + 1]?.materialtype === "Video" && (
            <ReactPlayer
              width="100%"
              height="100%"
              muted={true}
              onReady={handleOnReady}
              playing={playing}
              url={notice?.materials[idx + 1].material}
              loop={true}
            />
          )}
          {notice?.materials[idx + 1]?.materialtype === "Image" && (
            <img
              src={notice?.materials[idx + 1].material}
              alt={notice?.materials[idx + 1].name}
            />
          )}
          {notice?.materials[idx + 1]?.materialtype === "Text" && (
            <h1>{notice?.materials[idx + 1].material}</h1>
          )}
        </div>
        <div className="item">
          {notice?.materials[idx + 2]?.materialtype === "Video" && (
            <ReactPlayer
              muted={true}
              onReady={handleOnReady}
              playing={playing}
              url={notice?.materials[idx + 2].material}
              loop={true}
            />
          )}
          {notice?.materials[idx + 2]?.materialtype === "Image" && (
            <img
              src={notice?.materials[idx + 2].material}
              alt={notice?.materials[idx + 2].name}
            />
          )}
          {notice?.materials[idx + 2]?.materialtype === "Text" && (
            <h1>{notice?.materials[idx + 2].material}</h1>
          )}
        </div>
      </div>
    </>
  );
}
export default GridSlider;
