import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import PageOne from './PageOne'
import NotFound from './NotFound'

export default () => (
  <Switch>
    <Route path='/about' component={About} />
    <Route path='/pageOne' component={PageOne} />
    <Route path='/' component={Home} exact />
    <Route component={NotFound} />
  </Switch>
)
