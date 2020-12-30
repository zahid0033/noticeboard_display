import React from 'react'

const SingleImageHeadline = () => {
    return (
        <div style={{height: "100vh"}}>
            <div style={{height: "95%"}}>
                <img src="http://res.cloudinary.com/njay/image/upload/v1609313074/iu03pxb2byezvxbkgexz.png" width="100%" height="100%" alt=""/>
            </div>
            <div style={{height:"5%", background: "white"}}>
                <marquee style={{fontSize: "26px"}}>This is basic example of marquee</marquee>
            </div>

        </div>
    )
}

export default SingleImageHeadline