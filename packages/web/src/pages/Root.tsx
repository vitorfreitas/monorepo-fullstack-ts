import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={lazy(() => import('./List'))} />
      <Route path="/details" component={() => <h1>Details</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Root
