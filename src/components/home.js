import React,{Component} from 'react'
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Link to={`/single_frame`}> Page Grid </Link> <br/>
                <Link to={`/slider`}> Slider </Link> <br/>
                <Link to={`/single_image`}> Single Image </Link> <br/>
                <Link to={`/single_image_headline`}> Single Image Headline </Link>
            </div>
        )
    }
}
export default Home