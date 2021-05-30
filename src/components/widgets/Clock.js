import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <>
      {time && (
        <div
          style={{
            height: "10vh",
            width: "auto",
            position: "fixed",
            bottom: "0",
            right: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            background: "black",
            color: "white",
            zIndex: "3",
            padding: "0 20px",
          }}
        >
          <span>{new Date(time).toLocaleTimeString()}</span>
          <span>{new Date(time).toLocaleDateString()}</span>
        </div>
      )}
    </>
  );
};

export default Clock;
