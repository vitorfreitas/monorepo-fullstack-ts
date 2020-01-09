import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={lazy(() => import('./List'))} />
      <Route
        path="/details"
        exact
        component={lazy(() => import('./Details'))}
      />
    </Switch>
  </BrowserRouter>
)

export default Root
