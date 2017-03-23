import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Home from './containers/home.jsx'
import Away from './containers/away.jsx'
import NotFound from './containers/not-found.jsx'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/away">Away</Link></li>
              <li><Link to="/not-found">No Match</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/away" component={Away} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}