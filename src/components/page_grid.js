import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Material from './Material'

const { REACT_APP_NOT_AXIOS_BASE_URL } = process.env

function Page_grid() {
    const [notices, setMotices] = useState([])

    const getNotices = async () => {
        try {
            const { data } = await axios.get(`${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getnotices`)
            console.log(data)
            if (data.success) {
                setMotices(data.notices)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getNotices()
    }, [])

    return (
        <>
            <div className="flex-container">
                {notices?.map((notice, key) => (
                    <div key={key}>
                        <Material material={notice.material} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default Page_grid
