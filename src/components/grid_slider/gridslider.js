import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";

function GridSlider({ notice, update }) {
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
    return () => clearInterval(countDown);
  }, [time, notice?.interval, update]);

  return (
    <>
      <div className="counter">
        <h1>{time}</h1>
        <p>
          Playing {idx + 1} of {notice?.materials?.length}
        </p>
      </div>
      <div className="flex-container">
        <Fragment>
          {notice?.materials[idx]?.materialtype === "Video" && (
            <div className="item">
              <ReactPlayer
                width="100%"
                height="100%"
                url={notice?.materials[idx].material}
                playing={true}
                loop={true}
              />
            </div>
          )}
          {notice?.materials[idx]?.materialtype === "Image" && (
            <div className="item">
              <img
                src={notice?.materials[idx].material}
                alt={notice?.materials[idx].name}
              />
            </div>
          )}
          {notice?.materials[idx]?.materialtype === "Text" && (
            <div className="item">
              <h1>{notice?.materials[idx].material}</h1>
            </div>
          )}
        </Fragment>
        <Fragment>
          {notice?.materials[idx + 1]?.materialtype === "Video" && (
            <div className="item">
              <ReactPlayer
                onReady={handleOnReady}
                playing={playing}
                url={notice?.materials[idx + 1].material}
                loop={true}
              />
            </div>
          )}
          {notice?.materials[idx + 1]?.materialtype === "Image" && (
            <div className="item">
              <img
                src={notice?.materials[idx + 1].material}
                alt={notice?.materials[idx + 1].name}
              />
            </div>
          )}
          {notice?.materials[idx + 1]?.materialtype === "Text" && (
            <div className="item">
              <h1>{notice?.materials[idx + 1].material}</h1>
            </div>
          )}
        </Fragment>
        <Fragment>
          {notice?.materials[idx + 2]?.materialtype === "Video" && (
            <div className="item">
              <ReactPlayer
                url={notice?.materials[idx + 1].material}
                playing={true}
                loop={true}
              />
            </div>
          )}
          {notice?.materials[idx + 2]?.materialtype === "Image" && (
            <div className="item">
              <img
                src={notice?.materials[idx + 2].material}
                alt={notice?.materials[idx + 2].name}
              />
            </div>
          )}
          {notice?.materials[idx + 2]?.materialtype === "Text" && (
            <div className="item">
              <h1>{notice?.materials[idx + 2].material}</h1>
            </div>
          )}
        </Fragment>
      </div>
    </>
  );
}
export default GridSlider;
