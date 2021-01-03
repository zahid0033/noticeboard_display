import React, { Fragment } from 'react';
function Page_grid({ notices }) {
    return (
        <div className="flex-container">
            {notices?.map((notice, key) => (
                <div className="item" key={key}>
                    {notice?.material?.materialtype === 'Image' && <img src={notice?.material?.material} alt={notice?.material.name} />}
                    {notice?.material?.materialtype === 'Text' && <p>{notice?.material?.material}</p>}
                </div>
            ))}
        </div>
    )
}
export default Page_grid
