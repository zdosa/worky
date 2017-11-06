import React, {Component} from 'react'
import { connect } from 'react-redux'

import { start } from '../redux/example.js'

class Connected extends Component {
  componentDidMount() {
    this.props.start()
  }

  render() {
    return (
      <h1>I'm connected, and I worky</h1>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(start()),
})

export default connect(null, mapDispatchToProps)(Connected)