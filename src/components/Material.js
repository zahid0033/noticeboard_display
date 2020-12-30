import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
const { REACT_APP_NOT_AXIOS_BASE_URL } = process.env

export default function Material({ material }) {
    const [materialObject, setMaterialObject] = useState({})
    const getMaterialObject = useCallback(async () => {
        try {
            const { data } = await axios.get(`${REACT_APP_NOT_AXIOS_BASE_URL}/admin/getmaterial/${material}`)
            if (data.success) {
                console.log(data)
                setMaterialObject(data.material)
            } else {
                console.log(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }, [material])
    useEffect(() => {
        getMaterialObject()
    }, [getMaterialObject])
    return (
        <>
            {materialObject?.materialtype === 'Image' && <img src={materialObject?.material} alt={materialObject.name} />}
            {materialObject?.materialtype === 'Text' && <p>{materialObject?.material}</p>}
        </>
    )
}
