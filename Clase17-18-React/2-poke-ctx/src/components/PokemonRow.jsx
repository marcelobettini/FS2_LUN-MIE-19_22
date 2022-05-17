import { Button, TableRow, TableCell } from "@mui/material"
import React, {useContext} from 'react'
import pokemonContext from "../pokemonContext"

const PokemonRow = ({ pokemon }) => {
    const {setSelectedPokemon} = useContext(pokemonContext)
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(" - ")}</TableCell>
            <TableCell><Button variant="contained" color="secondary"
                onClick={() => setSelectedPokemon(pokemon)}
            >info</Button></TableCell>
        </TableRow>
    )
}

export default PokemonRow