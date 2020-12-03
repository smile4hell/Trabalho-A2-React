import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"
import NaoEncontrado from "./pages/NaoEncontrado"
import MenuInicial from './pages/MenuInicial'
import RotasPrivadas from './rotasPrivadas'
import sac from "./pages/sac";
import faq from "./pages/faq";


export default function Rotas(){
  return(
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Inicio} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/sac" component={sac} />
    <Route exact path="/faq" component={faq} />
    <RotasPrivadas exact path="/menu" component={MenuInicial} />
    <Route component={NaoEncontrado} />
  </Switch>
</BrowserRouter>
  )
}