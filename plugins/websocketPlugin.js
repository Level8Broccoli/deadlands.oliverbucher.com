import SockJS from 'sockjs-client'

export default function websocketPlugin({ store }) {
  console.log('plugin loaded')
  const socket = new SockJS('https://deadlands-echo.herokuapp.com/echo')
  socket.onopen = function() {
    console.log('[WS] Connection opened')
  }
  socket.onmessage = function(e) {
    console.log('[WS] Message:', e.data)
  }
  socket.onclose = function() {
    console.log('[WS] Connection closed')
  }
  store.subscribe((mutation, state) => {
    // console.log(mutation)
    // console.log(state)
    // console.log('mutation', mutation)
    // console.log('payload', state.payload)
  })
  store.subscribeAction((action, state) => {
    // console.log(action)
    // console.log(state)
  })
}
