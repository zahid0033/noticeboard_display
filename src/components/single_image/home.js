import React from 'react'

const SingleImage = ({ notice }) => {
    console.log(notice)
    return (
        <div style={{ height: "100vh" }}>
            <div style={{ height: "100%", position: "relative" }}>
                {notice?.materials[3]?.materialtype === 'Image' && <img src={notice.materials[3].material} alt="" style={{ height: "100%", display: "block", marginLeft: "auto", marginRight: "auto" }} />}
                {notice?.materials[3]?.materialtype === 'Text' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100%" }}><h1>{notice.materials[3].material}</h1></div>}
                <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                    <img src="https://i.ibb.co/DKqStGC/download.png" alt="" style={{ width: "100px", borderRadius: "50%" }} />
                </div>
            </div>
        </div>
    )
}

export default SingleImage