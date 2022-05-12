import { Button, TableRow, TableCell } from "@mui/material"
const PokemonRow = ({ pokemon, onInfo }) => {
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(" - ")}</TableCell>
            <TableCell><Button variant="contained" color="secondary"
                onClick={() => onInfo(pokemon)}
            >info</Button></TableCell>
        </TableRow>
    )
}
export default PokemonRow