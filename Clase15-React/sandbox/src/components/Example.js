import { useState, useEffect } from "react";
function Example() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount((prevState) => prevState + 1)
        localStorage.setItem("counter", count)
    }

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("counter")))
    }, []);

    useEffect(() => {
        document.title = `has cliqueado ${count} veces`
    }) //componentDidMount componentDidUpdate

    return (
        <>
            <p>Has cliqueado {count} veces</p>
            <button onClick={increment}>Subir</button>
        </>
    )
}

export default Example