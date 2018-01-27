import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NestedPartial from './NestedPartial'
import NotFound from './NotFound'
import WebSocketExample from './WebSocket'
import User from './User'

export default () => (
  <Switch>
    <Route path='/about' component={About} />
    <Route path='/nestedPartial' component={NestedPartial} />
    <Route path='/websocket' component={WebSocketExample} />
    <Route path='/user' component={User} />
    <Route path='/' component={Home} exact />
    <Route component={NotFound} />
  </Switch>
)
