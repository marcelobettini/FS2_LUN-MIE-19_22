import { useState, useEffect } from "react";
const Fetcher = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.log(err))
    })

    return (
        <>
            <h2>Lista de usuarios</h2>
            <ol>
                {data.map(usr => <li key={usr.id}>{usr.name} - {usr.website}</li>)}

            </ol>
        </>
    )
}
export default Fetcher