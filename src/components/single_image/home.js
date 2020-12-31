import React from 'react'

const SingleImage = () => {
    return (
        <div style={{height: "100vh"}}>
            <div style={{height: "100%",position:"relative"}}>
                <img src="http://res.cloudinary.com/zahid0033/image/upload/v1609316826/uirltwbfr32b8ci2ddem.jpg" alt=""
                     style={{height:"100%",display: "block",marginLeft: "auto",marginRight: "auto"}}/>
                <div style={{position:"absolute",top: "10px", right: "10px"}}>
                    <img src="https://i.ibb.co/DKqStGC/download.png" alt="" style={{width: "100px", borderRadius: "50%"}}/>
                </div>
            </div>
        </div>
    )
}

export default SingleImage