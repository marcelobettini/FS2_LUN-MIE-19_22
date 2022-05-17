import { useEffect, useState } from 'react'
import pokemonContext from "./pokemonContext";
import PokemonTable from './components/PokemonTable'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then(res => res.json())
      .then(info => setData(info))
  }, [])
  return (
<pokemonContext.Provider value={{data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon }}>

    <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: "60vw" }}>
      <h1>Pokemon Finder</h1>
      <PokemonFilter/>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "1.5em", marginTop: "2em"  }}>
      <PokemonTable/>
      <PokemonInfo />
      </div>
    </div>
    </pokemonContext.Provider>
  )
}

export default App
