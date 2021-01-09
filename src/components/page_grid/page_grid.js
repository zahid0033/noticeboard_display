import React, { Fragment } from 'react';
function Pagegrid({ notices }) {
    return (
        <div className="flex-container">
            {notices?.map((notice, key) => (
                <Fragment key={key}>
                    {notice?.material?.materialtype === 'Image' && <div className="item"><img src={notice?.material?.material} alt={notice?.material.name} /></div>}
                    {notice?.material?.materialtype === 'Text' && <div className="item"><h1>{notice?.material?.material}</h1></div>}
                </Fragment>
            ))}
        </div>
    )
}
export default Pagegrid
