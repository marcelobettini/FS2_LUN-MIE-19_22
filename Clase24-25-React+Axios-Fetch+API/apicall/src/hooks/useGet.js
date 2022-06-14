//Cuando el componente se monte, este custom hook va a realizar una request HTTP a un endpoint variable y retornará una de estas cosas:
//A) la info
//B) loading
//c) error

import { useEffect, useState } from "react";
import { API } from "../API"

export const useGet = (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async (endpoint) => {
        try {
            const { data } = await API.get(endpoint)
            setData(data);
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        getData(endpoint);
    }, [endpoint])
    return [data, loading, error];

}
