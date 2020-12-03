// cSpell:Ignore botao
import React from 'react';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from "@material-ui/core/styles"
import PhoneIcon from '@material-ui/icons/Phone';
import ComputerIcon from '@material-ui/icons/Computer';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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

export default function Sac() {
    const classes = useStyles() //estilos do Material-UI
    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h3" color="primary">
                    <ContactSupportIcon fontSize='large' /> Serviço de atendimento ao cliente. <ContactSupportIcon fontSize='large' />
            </Typography>
            <Typography> 
                <PhoneIcon/>  Contato via telefone: 0800 555 1234
            </Typography>
            <Typography> 
                <WhatsAppIcon/>  Atendimento pelo WhatsApp: +55 11 97216-6932
            </Typography>
            <Typography> 
                <ComputerIcon/>  Chat em tempo real: http://www.chat-Alyas_Suporte/
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