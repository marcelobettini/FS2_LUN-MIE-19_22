import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import React from 'react'

const PokemonInfo = ({ name: { english }, base, onDismiss }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{english}</Typography>
                {Object.keys(base).map((key) =>
                    <Typography key={key}>{key} : {base[key]} </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => onDismiss()}>dismiss</Button>
            </CardActions>
        </Card>
    )
}

export default PokemonInfo