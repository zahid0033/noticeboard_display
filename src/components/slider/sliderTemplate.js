import React, { useState, useEffect } from 'react'

const SliderTemplate = ({ notices }) => {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const changeSlide = setTimeout(() => {
            if (idx === notices.length - 1) {
                setIdx(0)
            } else {
                setIdx(d => d + 1)
            }
        }, 2000)
        return () => clearTimeout(changeSlide)
    }, [idx, notices.length])

    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
            {notices[idx]?.material?.materialtype === 'Image' && <img src={notices[idx]?.material?.material} style={{ height: "100%" }} alt={notices[idx]?.material.name} />}
            {notices[idx]?.material?.materialtype === 'Text' && <div className="text_slide"><h1>{notices[idx]?.material?.material}</h1></div>}
        </div>
    )

}
export default SliderTemplate
