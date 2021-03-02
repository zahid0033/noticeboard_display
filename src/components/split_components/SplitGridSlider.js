import { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function SplitGridSlider({ notice, update }) {
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
  }, [time, notice?.interval, update]);

  return (
    <>
      <div className="noticeset-1">
        {notice?.materials[idx]?.materialtype === "Video" && (
          <ReactPlayer
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
          <pre>{notice?.materials[idx].material}</pre>
        )}
      </div>
      <div className="noticeset-2">
        {notice?.materials[idx + 1]?.materialtype === "Video" && (
          <ReactPlayer
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
          <pre>{notice?.materials[idx + 1].material}</pre>
        )}
      </div>
      <div className="noticeset-3">
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
          <pre>
            {"     ::"}
            <h1>{notice?.materials[idx + 2].material}</h1>
            {"::     "}
          </pre>
        )}
      </div>
    </>
  );
}
