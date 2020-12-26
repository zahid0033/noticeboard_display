import React,{Component} from 'react'
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Link to={`/single_frame`}> Page Grid </Link><br/>
                <Link to={`/slider`}> Slider </Link>
            </div>
        )
    }
}
export default Home