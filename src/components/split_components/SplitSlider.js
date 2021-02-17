import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function SplitSlider({ notice }) {
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
      {notice?.materials[idx]?.materialtype === "Image" && (
        <img
          src={notice?.materials[idx]?.material}
          alt={notice?.materials[idx]?.name}
        />
      )}
      {notice?.materials[idx]?.materialtype === "Text" && (
        <h1>{notice?.materials[idx]?.material}</h1>
      )}
      {notice?.materials[idx]?.materialtype === "Video" && (
        <ReactPlayer
          muted
          onReady={handleOnReady}
          playing={playing}
          url={notice?.materials[idx].material}
          loop={true}
        />
      )}
    </>
  );
}
