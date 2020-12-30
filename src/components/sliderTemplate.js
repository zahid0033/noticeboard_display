import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SlideMaterial from './SlideMaterial'

const { REACT_APP_NOT_AXIOS_BASE_URL } = process.env;

const SliderTemplate = () => {
    const [notices, setMotices] = useState([])
    const [idx, setIdx] = useState(0)
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
        <div>
            <SlideMaterial material={notices[idx]?.material} />
        </div>
    )

}
export default SliderTemplate
