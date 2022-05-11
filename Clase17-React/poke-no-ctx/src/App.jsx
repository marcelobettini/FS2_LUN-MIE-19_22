import { useEffect, useState } from 'react'
import './App.css'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import PokemonRow from './components/PokemonRow'
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
    <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: "60vw" }}>
      <h1>Pokemon Finder</h1>
      <PokemonFilter setFilter={setFilter}></PokemonFilter>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "2em", alignItems: 'center' }}>

        <TableContainer component={Paper} sx={{ display: 'flex', mt: '2em' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter(({ name: { english } }) => english.toLowerCase().startsWith(filter.toLowerCase()))
                .splice(0, 8)
                .map((pokemon) => <PokemonRow key={pokemon.id} pokemon={pokemon}
                  onInfo={(pokemon) => setSelectedPokemon(pokemon)}
                />)}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedPokemon && <PokemonInfo onDismiss={() => setSelectedPokemon(null)} {...selectedPokemon} />}
      </div>
    </div>
  )
}

export default App
