import React, {Component} from 'react'
import { connect } from 'react-redux'

import { socketConnect, socketDisconnect, listenTimer } from '../redux/socket.js'

class Connected extends Component {

  handleConnectSocket() {
    this.props.socketConnect()
  }

  handleDisconnectSocket() {
    this.props.socketDisconnect()
  }

  handleListenTimer() {
    this.props.listenTimer()
  }

  render() {
    const { socketReducer } = this.props
    return (
      <div>
        <h1>I'm connected, and its worky</h1>
        <input type="button" value="Connect Socket" onClick={this.handleConnectSocket.bind(this)} />
        <input type="button" value="Disconnect Socket" onClick={this.handleDisconnectSocket.bind(this)} />
        <input type="button" value="Listen Timer" onClick={this.handleListenTimer.bind(this)} />
        {socketReducer.timer && 
          <h2>{socketReducer.timer}</h2>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  socketReducer: state.socketReducer,
})

const mapDispatchToProps = dispatch => ({
  socketConnect: () => dispatch(socketConnect()),
  socketDisconnect: () => dispatch(socketDisconnect()),
  listenTimer: () => dispatch(listenTimer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Connected)