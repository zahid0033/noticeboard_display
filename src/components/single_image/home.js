import React from 'react'

const SingleImage = ({ notice }) => {
    return (
        <div style={{ height: "100vh" }}>
            <div style={{ height: "100%", position: "relative" }}>
                <img src={notice.material.material} alt=""
                    style={{ height: "100%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
                <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                    <img src="https://i.ibb.co/DKqStGC/download.png" alt="" style={{ width: "100px", borderRadius: "50%" }} />
                </div>
            </div>
        </div>
    )
}

export default SingleImage