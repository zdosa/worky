import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import exampleReducer from './example.js'

const middleware = [thunk]

const reducer = combineReducers({
  exampleReducer,
})

const store = createStore(reducer, composeWithDevTools((applyMiddleware(...middleware))))
export default store