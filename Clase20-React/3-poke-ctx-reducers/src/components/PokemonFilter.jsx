import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import pokemonContext from "../pokemonContext"

const PokemonFilter = () => {
    const { dispatch } = useContext(pokemonContext)
    return (
        <TextField label="Find Pokemon..." variant='filled'
            onChange={(e) => dispatch({ type: "SET_FILTER", payload: e.target.value })}
        />
    )
}

export default PokemonFilter