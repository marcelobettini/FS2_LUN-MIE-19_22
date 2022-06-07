import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import PokemonRow from './PokemonRow'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setData } from "../redux/pokemonSlice"


const PokemonTable = () => {
  const { filter, data } = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://reactnobrains.000webhostapp.com/pokemon.json')
      .then(res => res.json())
      .then(info => dispatch(setData(info)))
  }, [])

  return (
    <TableContainer component={Paper}>
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
            .map((pokemon) => <PokemonRow key={pokemon.id} pokemon={pokemon} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PokemonTable