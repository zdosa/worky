import io from 'socket.io-client'

let socket = null

export function connect() {
  socket = io.connect('http://localhost:7998')
}

export function disconnect() {
  if (socket) { socket.disconnect() }
  socket = null
}

export function on(event, cb) {
  socket.on(event, (message) => {
    return cb(message)
  })
}