import React, { Fragment } from 'react';
function Page_grid({ notices }) {
    return (
        <div className="flex-container">
            {notices?.map((notice, key) => (
                <Fragment key={key}>
                    {notice?.material?.materialtype === 'Image' && <img className="item" src={notice?.material?.material} alt={notice?.material.name} />}
                    {notice?.material?.materialtype === 'Text' && <p className="item">{notice?.material?.material}</p>}
                </Fragment>
            ))}
        </div>
    )
}
export default Page_grid
