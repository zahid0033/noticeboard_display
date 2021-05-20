import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { io } from "socket.io-client";
// import { Route } from "react-router-dom";
import PageSplitOne from "./components/PageSplitOne";
import PageSplitTwo from "./components/PageSplitTwo";
import PageSplitThreeThree from "./components/PageSplitThreeThree";
import PageSplitThreeTwoRight from "./components/PageSplitThreeTwoRight";
import PageSplitThreeTwoLeft from "./components/PageSplitThreeTwoLeft";
import PageSplitFour from "./components/PageSplitFour";

// import Home from "./components/home";
// import SliderTemplate from "./components/slider/sliderTemplate";
// import SingleImage from "./components/single_image/home";
// import GridSlider from "./components/grid_slider/gridslider";
// import SingleImageHeadline from "./components/single_image_headline/home";
// import { BrowserRouter, Switch } from "react-router-dom";
const { REACT_APP_NOT_AXIOS_BASE_URL, REACT_APP_NOT_BOARD_ID } = process.env;

const socket = io(REACT_APP_NOT_AXIOS_BASE_URL, {
  transports: ["websocket"],
  upgrade: false,
});

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
    // io.join(boardId)
    socket.emit("connected", data);
    socket.emit("join", boardId);
  };

  useEffect(() => {
    socket.on("connect", connectBoard);
    socket.on("update", getnoticeboard);
    getnoticeboard();
  }, []);

  return (
    <div className="">
      {noticeboard?.splitType === "onedisplay" && (
        <PageSplitOne
          headline={noticeboard?.headline}
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.splitType === "twosplit" && (
        <PageSplitTwo
          headline={noticeboard?.headline}
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.splitType === "threetworight" && (
        <PageSplitThreeTwoRight
          headline={noticeboard?.headline}
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.splitType === "threetwoleft" && (
        <PageSplitThreeTwoLeft
          headline={noticeboard?.headline}
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.splitType === "threesplit" && (
        <PageSplitThreeThree
          headline={noticeboard?.headline}
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.splitType === "foursplit" && (
        <PageSplitFour
          headline={noticeboard?.headline}
          logo={noticeboard?.organization?.logo}
          update={update}
          noticesets={noticeboard?.splitNoticeSets}
        />
      )}
      {noticeboard?.headline && (
        <div style={{ height: "10vh" }}>
          {/*eslint-disable-next-line */}
          <marquee
            style={{
              height: "6vh",
              fontSize: "6vh",
              lineHeight: "6vh",
              padding: "10px",
            }}
          >
            {noticeboard?.headline}
          </marquee>
        </div>
      )}
    </div>
  );
}

export default App;
