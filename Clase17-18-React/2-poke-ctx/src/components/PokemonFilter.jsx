import React, {useContext} from 'react'
import { TextField } from '@mui/material'
import pokemonContext from "../pokemonContext"

const PokemonFilter = () => {
const {setFilter} = useContext(pokemonContext)
    return (
        <TextField label="Find Pokemon..." variant='filled'
            onChange={(e) => setFilter(e.target.value)}
        />
    )
}

export default PokemonFilter