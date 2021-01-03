import React from 'react';

function Page_grid({ notices }) {
    return (
        <>
            <div className="flex-container">
                {notices?.map((notice, key) => (
                    <div key={key}>
                        {notice?.material?.materialtype === 'Image' && <img src={notice?.material?.material} alt={notice?.material.name} />}
                        {notice?.material?.materialtype === 'Text' && <div className="text_slide"><h1>{notice?.material?.material}</h1></div>}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Page_grid
