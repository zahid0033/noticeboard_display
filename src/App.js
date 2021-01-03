import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
// import { Route } from "react-router-dom";
import Pagegrid from "./components/page_grid/page_grid";
// import Home from "./components/home";
import SliderTemplate from "./components/slider/sliderTemplate";
import SingleImage from "./components/single_image/home";
// import SingleImageHeadline from "./components/single_image_headline/home";
// import { BrowserRouter, Switch } from "react-router-dom";
const { REACT_APP_NOT_AXIOS_BASE_URL } = process.env

function App() {
  const [noticeboard, setNoticeBoard] = useState({})
  const getnoticeboard = async () => {
    try {
      const { data } = await axios.get(`${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getnoticeboard/5fee5ddae700974413526b33`)
      console.log(data)
      if (data.success) {
        setNoticeBoard(data.noticeboard)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getnoticeboard()
  }, [])
  return (
    <div className="">
      <header className="display_content">
        {noticeboard?.displaytype === "grid" && <Pagegrid />}
        {noticeboard?.displaytype === "slider" && <SliderTemplate />}
        {noticeboard?.displaytype === "singleimage" && <SingleImage />}
      </header>
    </div>
  );
}

export default App;