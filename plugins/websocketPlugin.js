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
    const parse = JSON.parse(e.data)
    store.dispatch('chronicle/commitOtherAction', parse)
    store.dispatch('charSave/updateCharNames', parse)
    store.dispatch('udpateCardDeck', parse)
  }
  socket.onclose = function() {
    store.commit('chronicle/setWsConnection', false)
    console.log('[WS] Connection closed')
  }
  store.subscribe((mutation, state) => {
    if (
      mutation.type === 'chronicle/addToChronicle' &&
      mutation.payload.meta.author === state.charSave.id
    ) {
      sendMessage(JSON.stringify(mutation.payload))
    }
  })
}
