import React from 'react'

const SingleImageHeadline = () => {
    return (
        <div style={{height: "100vh"}}>
            <div style={{height: "95%",position:"relative"}}>
                <img src="http://res.cloudinary.com/njay/image/upload/v1609313074/iu03pxb2byezvxbkgexz.png" alt=""
                     style={{height:"100%",display: "block",marginLeft: "auto",marginRight: "auto"}}/>
                <div style={{position:"absolute",top: "10px", right: "10px"}}>
                    <img src="https://i.ibb.co/DKqStGC/download.png" alt="" style={{width: "100px", borderRadius: "50%",boxShadow: "0px 0px 10px #2f2e2e"}}/>
                </div>
            </div>
            <div style={{height:"5%", background: "white"}}>
                <marquee style={{fontSize: "26px"}}>২০২১ সালের অনার্স চতুর্থ বর্ষের স্থগিত পরীক্ষার রুটিন প্রকাশিত</marquee>
            </div>

        </div>
    )
}

export default SingleImageHeadline