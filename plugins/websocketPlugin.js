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
      const parse = JSON.parse(e.data)
      console.log(parse)

      if (parse.meta && parse.payload) {
        store.dispatch('chronicle/commitOtherAction', parse)
        store.dispatch('players/updatePlayer', parse)
        store.dispatch('udpateCardDeck', parse)
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
      sendMessage(JSON.stringify(mutation.payload))
    }
  })
}
