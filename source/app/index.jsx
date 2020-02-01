import React from 'react'
import { Route, Switch } from 'react-router-dom'

// importar paginas
import Home from './pages/home'

const App = () => (
  <Switch>
    <Route path='/' exact component={Home} />
  </Switch>
)

export default App
