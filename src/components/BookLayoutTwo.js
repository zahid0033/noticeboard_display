import React from "react";
import SplitGridSlider from "./split_components/SplitGridSlider";
import SplitSlider from "./split_components/SplitSlider";
import Splitcontent from "./split_components/Singlecontent";
const BookLayoutTwo = ({ update, noticesets, headline, headlineTwo }) => {
  return (
    <div
      id="noticecontainer"
      style={{
        height: headline || headlineTwo ? "80vh" : "90vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      {noticesets && (
        <div className="itemz" style={{ height: "100%", width: "100%" }}>
          {noticesets?.viewtype === "imagetextslider" && (
            <SplitSlider update={update} notice={noticesets} />
          )}
          {noticesets?.viewtype === "singlecontent" && (
            <Splitcontent notice={noticesets} />
          )}
          {noticesets?.viewtype === "gridslider" && (
            <SplitGridSlider update={update} notice={noticesets} />
          )}
        </div>
      )}
      {noticesets && (
        <div className="itemz" style={{ height: "100%", width: "100%" }}>
          {noticesets?.viewtype === "imagetextslider" && (
            <SplitSlider update={update} notice={noticesets} />
          )}
          {noticesets?.viewtype === "singlecontent" && (
            <Splitcontent notice={noticesets} />
          )}
          {noticesets?.viewtype === "gridslider" && (
            <SplitGridSlider update={update} notice={noticesets} />
          )}
        </div>
      )}
    </div>
  );
};

export default BookLayoutTwo;
