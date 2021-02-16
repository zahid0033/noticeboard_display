import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const SliderTemplate = ({ notice }) => {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState(notice.interval);
  const [playing, setPlaying] = useState(false);
  const handleOnReady = () => {
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  };
  useEffect(() => {
    const changeSlide = setTimeout(() => {
      if (idx === notice.materials.length - 1) {
        setIdx(0);
      } else {
        setIdx((d) => d + 1);
      }
    }, Number(notice.interval) * 1000);
    return () => clearTimeout(changeSlide);
  }, [idx, notice.materials.length, notice.interval]);
  useEffect(() => {
    let countDown = setInterval(() => {
      if (time === 1) {
        setTime(notice?.interval);
      } else {
        setTime((t) => t - 1);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [time, notice.interval]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ background: "rgba(0,0,0,0)" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
            />
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
            Playing {idx + 1} of {notice?.materials?.length}
          </span>
          <span className="navbar-text">{time}</span>
        </div>
      </nav>
      <div className="container-fluid">
        {notice?.materials[idx]?.materialtype === "Image" && (
          <img
            className="img-fluid mx-auto d-block"
            src={notice?.materials[idx]?.material}
            style={{ height: "100vh" }}
            alt={notice?.materials[idx]?.name}
          />
        )}
        {notice?.materials[idx]?.materialtype === "Text" && (
          <div className="text_slide">
            <h1>{notice?.materials[idx]?.material}</h1>
          </div>
        )}
        {notice?.materials[idx]?.materialtype === "Video" && (
          <ReactPlayer
            width="100%"
            height="100%"
            muted
            onReady={handleOnReady}
            playing={playing}
            url={notice?.materials[idx].material}
            loop={true}
          />
        )}
      </div>
    </>
  );
};
export default SliderTemplate;
