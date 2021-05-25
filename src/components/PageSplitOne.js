import React from "react";
import SplitGridSlider from "./split_components/SplitGridSlider";
import SplitSlider from "./split_components/SplitSlider";
import Splitcontent from "./split_components/Singlecontent";
const PageSplitOne = ({ update, noticesets, headline }) => {
  return (
    <div id="noticecontainer" style={{ height: headline ? "80vh" : "90vh" }}>
      {noticesets[0] && (
        <div className="itemz" style={{ height: "100%", width: "100%" }}>
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
    </div>
  );
};

export default PageSplitOne;
