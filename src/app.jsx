import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './components/home.jsx'
import Away from './components/away.jsx'
import Connected from './components/connected.jsx'
import NotFound from './components/not-found.jsx'
import store from './redux/index.js'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/away">Away</Link></li>
                <li><Link to="/connected">Connected</Link></li>
                <li><Link to="/not-found">No Match</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/away" component={Away} />
                <Route path="/connected" component={Connected} />
                <Route component={NotFound} />
              </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}