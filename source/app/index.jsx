import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/header'
import Shearch from 'components/search'

import 'normalize.css'
import './global_css'

// importar paginas
import Home from './pages/home'
import Episode from './pages/episode'
import Character from './pages/character'
import Result from './pages/result'

// router
const App = () => (
  <>
    <Header />
    <Shearch />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/episode/:id' exact component={Episode} />
      <Route path='/character/:id' exact component={Character} />
      <Route path='/results' exact component={Result} />
    </Switch>
  </>
)

export default App
