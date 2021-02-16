import React, { Fragment, useEffect } from "react";
import GridSlider from "../grid_slider/gridslider";
import SingleImage from "../single_image/home";
import SliderTemplate from "../slider/sliderTemplate";

function Pagegrid({ noticesets }) {
  useEffect(() => {
    console.log(noticesets[0]);
  }, [noticesets]);
  return (
    <>
      <div className="row">
        {noticesets[0] && (
          <div className="col-6">
            {noticesets[0]?.viewtype === "slider" && (
              <SliderTemplate notice={noticesets[0]} />
            )}
            {noticesets[0]?.viewtype === "singleimage" && (
              <SingleImage notice={noticesets[0]} />
            )}
            {noticesets[0]?.viewtype === "gridslider" && (
              <GridSlider notice={noticesets[0]} />
            )}
          </div>
        )}
        {noticesets[1] && (
          <div className="col-6">
            {noticesets[1]?.viewtype === "slider" && (
              <SliderTemplate notice={noticesets[1]} />
            )}
            {noticesets[1]?.viewtype === "singleimage" && (
              <SingleImage notice={noticesets[1]} />
            )}
            {noticesets[1]?.viewtype === "gridslider" && (
              <GridSlider notice={noticesets[1]} />
            )}
          </div>
        )}
      </div>
      <div className="row">
        {noticesets[2] && (
          <div className="col-6">
            {noticesets[2]?.viewtype === "slider" && (
              <SliderTemplate notice={noticesets[2]} />
            )}
            {noticesets[2]?.viewtype === "singleimage" && (
              <SingleImage notice={noticesets[2]} />
            )}
            {noticesets[2]?.viewtype === "gridslider" && (
              <GridSlider notice={noticesets[2]} />
            )}
          </div>
        )}
        {noticesets[3] && (
          <div className="col-6">
            {noticesets[3]?.viewtype === "slider" && (
              <SliderTemplate notice={noticesets[3]} />
            )}
            {noticesets[3]?.viewtype === "singleimage" && (
              <SingleImage notice={noticesets[3]} />
            )}
            {noticesets[3]?.viewtype === "gridslider" && (
              <GridSlider notice={noticesets[3]} />
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default Pagegrid;
