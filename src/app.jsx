import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './components/home.jsx'
import Away from './components/away.jsx'
import Connected from './components/connected.jsx'
import NotFound from './components/not-found.jsx'

import { listenSocket } from './redux/socket.js'


class App extends Component {
  componentDidMount() {
    this.props.listenSocket()
  }
  render() {
    return (
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
    )
  }
}

const mapStateToProps = state => ({
  socketReducer: state.socketReducer,
})

const mapDispatchToProps = dispatch => ({
  listenSocket: () => dispatch(listenSocket()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)