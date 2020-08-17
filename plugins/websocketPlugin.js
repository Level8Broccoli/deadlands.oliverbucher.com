import SockJS from 'sockjs-client'

const WS_ENDPOINT = 'https://deadlands-echo.herokuapp.com/echo'

export default function websocketPlugin({ store }) {
  let sendMessage = (msg) => {}

  const connect = () => {
    const socket = new SockJS(WS_ENDPOINT)

    socket.onopen = function() {
      store.commit('chronicle/setWsConnection', true)
      sendMessage = (msg) => socket.send(msg)
    }

    socket.onmessage = function(e) {
      const parsed = JSON.parse(e.data)
      if (
        parsed.meta &&
        parsed.payload &&
        parsed.meta.author.id !== store.getters['charSave/charSave'].id
      ) {
        console.log('receive', parsed)
        store.dispatch('chronicle/commitAction', parsed)
        store.dispatch('players/updatePlayer', parsed)
        store.dispatch('updateCardDeck', parsed)
      }
    }

    socket.onclose = function() {
      store.commit('chronicle/setWsConnection', false)
      setTimeout(connect, Math.random() * 5000)
    }
  }
  connect()

  store.subscribe((mutation, state) => {
    if (
      mutation.type === 'chronicle/addToChronicle' &&
      mutation.payload.meta.author.id === state.charSave.id
    ) {
      console.log('send', mutation.payload)
      sendMessage(JSON.stringify(mutation.payload))
    }
  })
}
