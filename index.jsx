import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './src/app.jsx'
import store from './src/redux/index.js'


const render = (Component) => {
  ReactDOM.render(<Provider store={store} ><Component /></Provider>, document.getElementById('content'))
}

render(App)

if (module.hot) {
  module.hot.accept('./src/app.jsx', () => { 
    const NewApp = require('./src/app.jsx').default
    render(NewApp) 
  })
}