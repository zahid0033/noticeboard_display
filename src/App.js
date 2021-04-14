import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { io } from "socket.io-client";
// import { Route } from "react-router-dom";
import PageSplitThreeThree from "./components/page_split/pageSplitThreeThree";
import PageSplitThreeTwo from "./components/page_split/pageSplitThreeTwo";
// import Home from "./components/home";
// import SliderTemplate from "./components/slider/sliderTemplate";
// import SingleImage from "./components/single_image/home";
// import GridSlider from "./components/grid_slider/gridslider";
// import SingleImageHeadline from "./components/single_image_headline/home";
// import { BrowserRouter, Switch } from "react-router-dom";
const { REACT_APP_NOT_AXIOS_BASE_URL, REACT_APP_NOT_BOARD_ID } = process.env;

const socket = io(REACT_APP_NOT_AXIOS_BASE_URL);

function App() {
  const [noticeboard, setNoticeBoard] = useState({});
  const [update, setUpdate] = useState("");
  const getnoticeboard = async () => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getnoticeboard/${REACT_APP_NOT_BOARD_ID}`
      );
      if (data.success) {
        setUpdate(Math.random());
        setNoticeBoard(data.noticeboard);
        console.log(data.noticeboard);
        //alert('success')
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const connectBoard = () => {
    let boardId = REACT_APP_NOT_BOARD_ID;
    if (!boardId) return;
    let data = {
      type: "board",
      id: boardId,
    };
    socket.emit("connected", data);
  };

  useEffect(() => {
    socket.on("connect", connectBoard);
    socket.on("update", getnoticeboard);
  }, []);

  return (
    <div className="">
      {/* {noticeboard?.notice?.viewtype === "imagetextslider" && !noticeboard?.isSplit && (
        <SliderTemplate update={update} notice={noticeboard?.notice} />
      )}
      {noticeboard?.notice?.viewtype === "singlecontent" &&
        !noticeboard?.isSplit && (
          <SingleImage
            logo={noticeboard?.organization?.logo}
            notice={noticeboard?.notice}
          />
        )}
      {noticeboard?.notice?.viewtype === "gridslider" &&
        !noticeboard?.isSplit && (
          <GridSlider
            logo={noticeboard?.organization?.logo}
            update={update}
            notice={noticeboard?.notice}
          />
        )} */}
      {noticeboard?.splitType === "three-two" && (
        <PageSplitThreeTwo
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.splitType === "three-three" && (
        <PageSplitThreeThree
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
    </div>
  );
}

export default App;
