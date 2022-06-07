import React from "react"
import './App.css';

function App() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then((poke => setData(poke)))
  }, [])

  if (!data) return <p>Loading...</p>
  return (
    <>
      <h1>App con React + Node</h1>
      <ul>
        {data.slice(0, 20).map(poke => <li key={poke.id}> {poke.name.japanese}</li>)}
      </ul>

    </>
  );
}

export default App;
