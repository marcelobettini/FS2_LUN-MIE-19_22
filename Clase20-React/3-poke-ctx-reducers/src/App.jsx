import { useReducer, useEffect } from 'react'
import pokemonReducer from './pokemonReducer';
import pokemonContext from "./pokemonContext";
import PokemonTable from './components/PokemonTable'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, { data: [], filter: "", selectedPokemon: null })

  useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then(res => res.json())
      .then(info => dispatch({
        type: "SET_DATA",
        payload: info
      }))
  }, [])
  return (
    <pokemonContext.Provider value={{ state, dispatch }}>

      <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: "60vw" }}>
        <h1>Pokemon Finder</h1>
        <PokemonFilter />
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "1.5em", marginTop: "2em" }}>
          <PokemonTable />
          <PokemonInfo />
        </div>
      </div>
    </pokemonContext.Provider>
  )
}
export default App
