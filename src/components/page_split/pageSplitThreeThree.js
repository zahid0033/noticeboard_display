import React, { useEffect } from "react";
import SplitGridSlider from "../split_components/SplitGridSlider";
import SplitSlider from "../split_components/SplitSlider";
import Splitcontent from "../split_components/Singlecontent";

function PageSplitThreeThree({ update, noticesets, headline }) {
  useEffect(() => {
    console.log(noticesets[0]);
  }, [noticesets]);
  return (
    <>
      <div id="noticecontainer" style={{ height: headline ? "90vh" : "100vh" }}>
        {noticesets[0] && (
          <div className="threethree">
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
          <div className="threethree">
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
        {noticesets[2] && (
          <div className="threethree">
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
        {noticesets[3] && (
          <div className="items">
            {noticesets[3]?.viewtype === "imagetextslider" && (
              <SplitSlider update={update} notice={noticesets[3]} />
            )}
            {noticesets[3]?.viewtype === "singlecontent" && (
              <Splitcontent notice={noticesets[3]} />
            )}
            {noticesets[3]?.viewtype === "gridslider" && (
              <SplitGridSlider update={update} notice={noticesets[3]} />
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default PageSplitThreeThree;
