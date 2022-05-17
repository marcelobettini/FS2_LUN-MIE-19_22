import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import React, {useContext} from 'react'
import pokemonContext from "../pokemonContext"

const PokemonInfo = () => {
    const {selectedPokemon, setSelectedPokemon} = useContext(pokemonContext);
    return selectedPokemon && (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>{selectedPokemon.name.english}</Typography>
                {Object.keys(selectedPokemon.base).map((key) =>
                    <Typography key={key}>{key} : {selectedPokemon.base[key]} </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => setSelectedPokemon(null)}>dismiss</Button>
            </CardActions>
        </Card>
    )
}

export default PokemonInfo