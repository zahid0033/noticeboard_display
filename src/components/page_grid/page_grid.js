import React, { Fragment } from "react";
import ReactPlayer from "react-player";

function Pagegrid({ notices }) {
  return (
    <div className="flex-container">
      {notices?.map((notice, key) => (
        <Fragment key={key}>
          {notice?.material?.materialtype === "Image" && (
            <div className="item">
              <img
                src={notice?.material?.material}
                alt={notice?.material.name}
              />
            </div>
          )}
          {notice?.material?.materialtype === "Text" && (
            <div className="item">
              <h1>{notice?.material?.material}</h1>
            </div>
          )}
          {notice?.material?.materialtype === "Video" && (
            <div className="item">
              <ReactPlayer
                url={notice.material.material}
                playing={true}
                loop={true}
                style={{
                  height: "100%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
export default Pagegrid;
