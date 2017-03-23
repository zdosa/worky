import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/app.jsx'

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('content'))
}

render(App)

if (module.hot) {
  module.hot.accept('./src/app.jsx', () => { 
    const NewApp = require('./src/app.jsx').default
    render(NewApp) 
  })
}