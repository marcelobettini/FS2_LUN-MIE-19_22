import { useEffect, useState } from 'react'
import PokemonContext from "./PokemonContext"
import './App.css'
import PokemonTable from './components/PokemonTable'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'

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
    <PokemonContext.Provider value={{
      data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon
    }}>
      <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: "60vw" }}>
        <h1>Pokemon Finder</h1>
        <PokemonFilter setFilter={setFilter}></PokemonFilter>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "2em", alignItems: 'center' }}>
          <PokemonTable />
          {selectedPokemon && <PokemonInfo onDismiss={() => setSelectedPokemon(null)} {...selectedPokemon} />}
        </div>
      </div>
    </PokemonContext.Provider>
  )
}

export default App
