import React, {Component} from 'react'
import { connect } from 'react-redux'

import { listenTimer, disconnectSocket } from '../redux/socket.js'

class Connected extends Component {
  handleListenTimer() {
    this.props.listenTimer()
  }

  handleDisconnectSocket() {
    this.props.disconnectSocket()
  }

  render() {
    const { socketReducer } = this.props
    return (
      <div>
        <h1>I'm connected, and its worky</h1>
        <input type="button" value="Disconnect Socket" onClick={this.handleDisconnectSocket.bind(this)} />
        <input type="button" value="Listen Timer" onClick={this.handleListenTimer.bind(this)} />
        {socketReducer.timer && 
          <h2>{socketReducer.timer.date}</h2>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  socketReducer: state.socketReducer,
})

const mapDispatchToProps = dispatch => ({
  listenTimer: () => dispatch(listenTimer()),
  disconnectSocket: () => dispatch(disconnectSocket()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Connected)