import React from "react";
import SplitGridSlider from "./split_components/SplitGridSlider";
import SplitSlider from "./split_components/SplitSlider";
import Splitcontent from "./split_components/Singlecontent";
const PageSplitThreeTwoLeft = ({
  update,
  noticesets,
  headline,
  headlineTwo,
}) => {
  return (
    <div
      id="noticecontainer"
      style={{ height: headline || headlineTwo ? "80vh" : "90vh" }}
    >
      <div
        className="itemz"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {noticesets[0] && (
          <div style={{ height: "50%", width: "100%", objectFit: "contain" }}>
            {noticesets[0]?.viewtype === "imagetextslider" && (
              <SplitSlider update={update} notice={noticesets[0]} />
            )}
            {noticesets[0]?.viewtype === "singlecontent" && (
              <Splitcontent notice={noticesets[0]} />
            )}
            {noticesets[0]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[0]} />
            )}
          </div>
        )}
        {noticesets[1] && (
          <div style={{ height: "50%", width: "100%", objectFit: "contain" }}>
            {noticesets[1]?.viewtype === "imagetextslider" && (
              <SplitSlider update={update} notice={noticesets[1]} />
            )}
            {noticesets[1]?.viewtype === "singlecontent" && (
              <Splitcontent notice={noticesets[1]} />
            )}
            {noticesets[1]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[1]} />
            )}
          </div>
        )}
      </div>
      {noticesets[2] && (
        <div className="itemz">
          {noticesets[2]?.viewtype === "imagetextslider" && (
            <SplitSlider update={update} notice={noticesets[2]} />
          )}
          {noticesets[2]?.viewtype === "singlecontent" && (
            <Splitcontent notice={noticesets[2]} />
          )}
          {noticesets[2]?.viewtype === "gridslider" && (
            <SplitGridSlider update={update} notice={noticesets[2]} />
          )}
        </div>
      )}
    </div>
  );
};

export default PageSplitThreeTwoLeft;
