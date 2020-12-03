import React from "react";
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'
import {
  lightBlue,
  indigo,
  yellow,
  teal
} from "@material-ui/core/colors";
import CssBaseline from '@material-ui/core/CssBaseline';
import Rotas from './rotas'



function App() {

  const temaDark = false
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? indigo[500] : lightBlue[500]
  const corSecundaria = temaDark ? yellow[900] : teal[500]

  let theme = createMuiTheme(
    {
      palette: {
        type: tipoPaleta,
        primary: {
          main: corPrimaria
        },
        secondary: {
          main: corSecundaria
        }
      }
    })


  theme = responsiveFontSizes(theme)

  return (
    <MuiThemeProvider theme={theme} >
      <CssBaseline />
      <Rotas />
    </MuiThemeProvider>
  )
}

export default App;