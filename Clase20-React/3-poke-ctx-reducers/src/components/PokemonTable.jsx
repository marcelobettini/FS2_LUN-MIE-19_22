import React, { useContext } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import PokemonRow from './PokemonRow'
import pokemonContext from "../pokemonContext"

const PokemonTable = () => {
  const { state: { data, filter } } = useContext(pokemonContext)
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