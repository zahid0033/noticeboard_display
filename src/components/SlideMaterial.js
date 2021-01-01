import React from 'react'

export default function Material({ material }) {
    return (
        <>
            {material?.materialtype === 'Image' && <img src={material?.material} style={{ width: "100vw" }} alt={material.name} />}
            {material?.materialtype === 'Text' && <div className="text_slide"><h1>{material?.material}</h1></div>}
        </>
    )
}
