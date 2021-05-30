import { useState, useEffect, useCallback } from "react";
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
import { useParams } from "react-router-dom";
import Loader from "./components/Loader";
// import Clock from "./components/widgets/Clock";
// const { REACT_APP_NOT_AXIOS_BASE_URL, REACT_APP_NOT_BOARD_ID } = process.env;
// import Marquee from "react-fast-marquee";
import BookLayoutTwo from "./components/BookLayoutTwo";
const { REACT_APP_NOT_AXIOS_BASE_URL } = process.env;

const socket = io(REACT_APP_NOT_AXIOS_BASE_URL, {
  transports: ["websocket"],
  upgrade: false,
});

function App() {
  const { boardid } = useParams();
  const [loading, setLoading] = useState(false);
  // console.log(boardid);
  const [noticeboard, setNoticeBoard] = useState({});
  const [update, setUpdate] = useState("");
  const getnoticeboard = useCallback(async () => {
    setLoading(true);
    try {
      // const { data } = await axios.get(
      //   `${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getnoticeboard/${REACT_APP_NOT_BOARD_ID}`
      // );
      const { data } = await axios.get(
        `${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getnoticeboard/${boardid}`
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
    setLoading(false);
  }, [boardid]);

  const connectBoard = useCallback(() => {
    // let boardId = REACT_APP_NOT_BOARD_ID;

    // io.join(boardId)
    socket.emit("connected", {
      type: "board",
      id: boardid,
    });
    socket.emit("join", boardid);
  }, [boardid]);

  useEffect(() => {
    socket.on("connect", connectBoard);
    socket.on("update", getnoticeboard);
    getnoticeboard();
  }, [connectBoard, getnoticeboard]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          <div
            style={{
              height: "10vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              background:
                noticeboard?.organization?.header?.background || "white",
            }}
          >
            <img
              src={noticeboard?.organization?.logo}
              alt="logo"
              style={{ margin: "10px", height: "90%" }}
            />
            <h1
              style={{
                color: noticeboard?.organization?.header?.color || "black",
              }}
            >
              {noticeboard?.organization?.name}
            </h1>
            <img
              src={noticeboard?.organization?.extra}
              alt="extra"
              style={{ margin: "10px", height: "90%" }}
            />{" "}
          </div>
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
          {noticeboard?.splitType === "booklayouttwo" && (
            <BookLayoutTwo
              headline={noticeboard?.headline}
              logo={noticeboard?.organization?.logo}
              update={update}
              noticesets={noticeboard?.splitNoticeSets[0]}
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
            <>
              <div
                style={{
                  height: "10vh",
                  background:
                    noticeboard?.organization?.headline?.background || "white",
                }}
              >
                {/*eslint-disable-next-line */}
                <marquee
                  style={{
                    // height: "6vh",
                    fontSize: "6vh",
                    // lineHeight: "1",
                    // padding: "0 10px",
                    color:
                      noticeboard?.organization?.headline?.color || "black",
                  }}
                >
                  {noticeboard?.headline}
                </marquee>
              </div>
              {/* <Marquee
                speed="100"
                gradient={false}
                style={{
                  background:
                    noticeboard?.organization?.headline?.background || "white",
                  height: "10vh",
                }}
              >
                <div
                  className="text"
                  style={{
                    fontSize: "5vh",
                    color:
                      noticeboard?.organization?.headline?.color || "white",
                  }}
                >
                  {noticeboard?.headline}
                </div>
              </Marquee> */}
            </>
          )}
          {/* <Clock /> */}
        </div>
      )}
    </>
  );
}

export default App;
