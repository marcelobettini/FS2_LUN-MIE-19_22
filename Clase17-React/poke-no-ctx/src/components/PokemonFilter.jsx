import PokemonContext from '../PokemonContext'
import { useContext } from 'react'
import { TextField } from '@mui/material'

const PokemonFilter = () => {
    const { setFilter } = useContext(PokemonContext)
    return (
        <TextField label="Find Pokemon..." variant='filled'
            onChange={(e) => setFilter(e.target.value)}
        />
    )
}

export default PokemonFilter

