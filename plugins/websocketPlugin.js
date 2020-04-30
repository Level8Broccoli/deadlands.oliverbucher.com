import SockJS from 'sockjs-client'

const WS_ENDPOINT = 'https://deadlands-echo.herokuapp.com/echo'

export default function websocketPlugin({ store }) {
  let sendMessage = (msg) => {}

  const socket = new SockJS(WS_ENDPOINT)
  socket.onopen = function() {
    store.commit('chronicle/setWsConnection', true)
    console.log('[WS] Connection opened')
    sendMessage = (msg) => socket.send(msg)
  }
  socket.onmessage = function(e) {
    console.log('[WS] Message:', e.data)
  }
  socket.onclose = function() {
    store.commit('chronicle/setWsConnection', false)
    console.log('[WS] Connection closed')
  }
  store.subscribe((mutation, state) => {
    if (mutation.type === 'chronicle/addToChronicle') {
      console.log(JSON.stringify(mutation.payload))
      sendMessage('added to Chronicle')
    }
  })
}
