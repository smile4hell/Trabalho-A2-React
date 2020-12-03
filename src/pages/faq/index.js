// cSpell:Ignore botao
import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from "@material-ui/core/styles"
import Cabecalho from '../Cabecalho'


const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(10),
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    botao: {
        marginTop: theme.spacing(10)
    }
}
)
)

export default function NaoEncontrado() {
    const classes = useStyles() //estilos do Material-UI
    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" color="primary">
                    Duvidas frequentes.
            </Typography>
            <Typography marginTop="5">
                Quem somos ?.....................R: Desde 1997 atuamos no setor de [...]
                 <p>Porque escolher a Alyas ?....R: Estamos a frente do nosso tempo com maquinário de primeira e [...] </p> 
                 <p>Nossa politica:..............R: Com o intuito de sempre oferecer o [...]</p>
            </Typography>
                <Button
                    href="/"
                    variant="contained"
                    color="primary"
                    className={classes.botao}
                >
                    Voltar para o início
                </Button>
            </Paper>
        </>
    )
}