//Cuando el componente se monte, este custom hook va a realizar una request HTTP a un endpoint variable y retornará una de estas cosas:
//A) la info
//B) loading
//c) error

import { useEffect, useState } from "react";
const BASE_URL = 'https://rickandmortyapi.com/api/'

export const useGet = (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async (endpoint) => {
        try {
            const res = await fetch(BASE_URL + endpoint)
            const json = await res.json()
            setData(json.results);
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
