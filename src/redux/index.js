import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import socketReducer from './socket.js'
import { connect, disconnect, on } from '../utils/socket.js'

const middleware = [thunk.withExtraArgument({ connect, disconnect, on })]

const reducer = combineReducers({
  socketReducer,
})

const store = createStore(reducer, composeWithDevTools((applyMiddleware(...middleware))))
export default store