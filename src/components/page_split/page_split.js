import React, { useEffect } from "react";
import SplitGridSlider from "../split_components/SplitGridSlider";
import SplitSlider from "../split_components/SplitSlider";
import Splitcontent from "../split_components/Singlecontent";

function Pagegrid({ update, noticesets }) {
  useEffect(() => {
    console.log(noticesets[0]);
  }, [noticesets]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="grid-container">
        {noticesets[0] && (
          <div
            className={` notice-container ${
              noticesets[0]?.viewtype === "gridslider"
                ? "notice-container-grid"
                : ""
            }`}
          >
            {noticesets[0]?.viewtype === "slider" && (
              <SplitSlider update={update} notice={noticesets[0]} />
            )}
            {noticesets[0]?.viewtype === "singleimage" && (
              <Splitcontent notice={noticesets[0]} />
            )}
            {noticesets[0]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[0]} />
            )}
          </div>
        )}
        {noticesets[1] && (
          <div
            className={` notice-container ${
              noticesets[0]?.viewtype === "gridslider"
                ? "notice-container-grid"
                : ""
            }`}
          >
            {noticesets[1]?.viewtype === "slider" && (
              <SplitSlider update={update} notice={noticesets[1]} />
            )}
            {noticesets[1]?.viewtype === "singleimage" && (
              <Splitcontent notice={noticesets[1]} />
            )}
            {noticesets[1]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[1]} />
            )}
          </div>
        )}
      </div>
      <div className="grid-container">
        {noticesets[2] && (
          <div
            className={` notice-container ${
              noticesets[0]?.viewtype === "gridslider"
                ? "notice-container-grid"
                : ""
            }`}
          >
            {noticesets[2]?.viewtype === "slider" && (
              <SplitSlider update={update} notice={noticesets[2]} />
            )}
            {noticesets[2]?.viewtype === "singleimage" && (
              <Splitcontent notice={noticesets[2]} />
            )}
            {noticesets[2]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[2]} />
            )}
          </div>
        )}
        {noticesets[3] && (
          <div
            className={` notice-container ${
              noticesets[0]?.viewtype === "gridslider"
                ? "notice-container-grid"
                : ""
            }`}
          >
            {noticesets[3]?.viewtype === "slider" && (
              <SplitSlider update={update} notice={noticesets[3]} />
            )}
            {noticesets[3]?.viewtype === "singleimage" && (
              <Splitcontent notice={noticesets[3]} />
            )}
            {noticesets[3]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[3]} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Pagegrid;
