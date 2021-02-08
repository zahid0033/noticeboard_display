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
      <div className="counter">
        <h1>{time}</h1>
        <p>
          Playing {idx + 1} of {notice?.materials?.length}
        </p>
      </div>
      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          background: "#edf0f5",
        }}
      >
        {notice?.materials[idx]?.materialtype === "Image" && (
          <img
            src={notice?.materials[idx]?.material}
            style={{ height: "100%" }}
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
