const SOCKET = 'SOCKET'
const SOCKET_CONNECTED = 'SOCKET_CONNECTED'
const SOCKET_DISCONNECTED = 'SOCKET_DISCONNECTED'
const DISPATCH_EVERY_SECOND = 'DISPATCH_EVERY_SECOND'
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
    case SOCKET_CONNECTED:
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
    case DISPATCH_EVERY_SECOND:
      return {
        ...state,
      }
    default:
      return state
  }
}

export const listenSocket = () => (dispatch, getState, { connect, disconnect, on }) => {
  dispatch({ type: 'SOCKET' })
  connect()
  on('redux', (message) => {
    dispatch({ type: message })
  })
  on('disconnect', () => {
    dispatch({ type: SOCKET_DISCONNECTED })
  })
}

export const listenTimer = () => (dispatch, getState, { connect, disconnect, on }) => {
  on('timer', (message) => {
    dispatch({ type: TIMER, timer: message })
  })
}

export const disconnectSocket = () => (dispatch, getState, { connect, disconnect, on }) => {
  disconnect()
}