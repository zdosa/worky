import { connect, disconnect, on } from '../utils/socket.js'

const SOCKET = 'SOCKET'
const SOCKET_SUCCESS = 'SOCKET_CONNECTED'
const SOCKET_DISCONNECTED = 'SOCKET_DISCONNECTED'
const TIMER = 'TIMER'

const initialState = {
  connected: false,
  loading: false,
  error: null,
  timer: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SOCKET:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SOCKET_SUCCESS:
      return {
        ...state,
        loading: false,
        connected: true,
        error: null,
      }
    case SOCKET_DISCONNECTED:
      return {
        ...state,
        loading: false,
        connected: false,
      }
    case TIMER:
      return {
        ...state, 
        timer: action.timer
      }
    default:
      return state
  }
}

export const socketConnect = () => (dispatch, getState) => {
  dispatch({ type: SOCKET })
  connect()
  on('redux', (message) => {
    dispatch({ type: message })
  })
}

export const socketDisconnect = () => (dispatch, getState) => {
  dispatch({ type: SOCKET_DISCONNECTED })
  disconnect()
}

export const listenTimer = () => (dispatch, getState) => {
  on('timer', (message) => {
    dispatch({ type: TIMER, timer: message })
  })
}