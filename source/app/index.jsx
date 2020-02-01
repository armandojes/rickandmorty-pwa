import React from 'react'
import { Route, Switch } from 'react-router-dom'

// importar paginas
import Home from './pages/home'
import Episode from './pages/episode'
import Profile from './pages/profile'
import Result from './pages/result'

// router
const App = () => (
  <>
    <header>
      hello header
    </header>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/episode/:id' exact component={Episode} />
      <Route path='/profile/:id' exact component={Profile} />
      <Route path='/result' exact component={Result} />
    </Switch>
  </>
)

export default App
