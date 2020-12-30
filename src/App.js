import './App.css';
import { Route } from "react-router-dom";
import Page_grid from "./components/page_grid";
import Home from "./components/home";
import SliderTemplate from "./components/sliderTemplate";
import SingleImage from "./components/single_image/home";
import SingleImageHeadline from "./components/single_image_headline/home";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="">
      <header className="display_content">
        <BrowserRouter>
          <Switch>
            <Route path="/single_frame" exact component={Page_grid} />
            <Route path="/slider" exact component={SliderTemplate} />
            <Route path="/single_image" exact component={SingleImage} />
            <Route path="/single_image_headline" exact component={SingleImageHeadline} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;