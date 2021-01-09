import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { io } from 'socket.io-client';
// import { Route } from "react-router-dom";
import Pagegrid from "./components/page_grid/page_grid";
// import Home from "./components/home";
import SliderTemplate from "./components/slider/sliderTemplate";
import SingleImage from "./components/single_image/home";
import GridSlider from './components/grid_slider/gridslider';
// import SingleImageHeadline from "./components/single_image_headline/home";
// import { BrowserRouter, Switch } from "react-router-dom";
const { REACT_APP_NOT_AXIOS_BASE_URL, REACT_APP_NOT_BOARD_ID } = process.env

const socket = io(REACT_APP_NOT_AXIOS_BASE_URL)

function App() {
  const [noticeboard, setNoticeBoard] = useState({})
  const getnoticeboard = async () => {
    try {
      const { data } = await axios.get(`${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getnoticeboard/${REACT_APP_NOT_BOARD_ID}`)
      console.log(data)
      if (data.success) {
        setNoticeBoard(data.noticeboard)
        //alert('success')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const connectBoard = () => {
    let boardId = REACT_APP_NOT_BOARD_ID;
    if (!boardId) return;
    let data = {
      type: "board",
      id: boardId
    }
    socket.emit('connected', data)
  }

  useEffect(() => {
    socket.on('connect', connectBoard)
    socket.on('update', getnoticeboard)
  }, [])

  return (
    <div className="">
      <header className="display_content">
        {noticeboard?.notice?.viewtype === "grid" && <Pagegrid notice={noticeboard?.notice} />}
        {noticeboard?.notice?.viewtype === "slider" && <SliderTemplate notice={noticeboard?.notice} />}
        {noticeboard?.notice?.viewtype === "singleimage" && <SingleImage notice={noticeboard?.notice} />}
        {noticeboard?.notice?.viewtype === "gridslider" && <GridSlider notice={noticeboard?.notice} />}
      </header>
    </div>
  );
}

export default App;