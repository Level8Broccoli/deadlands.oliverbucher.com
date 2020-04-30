<template>
  <div>
    <HeaderLogo />
    <section class="section">
      <div class="container">
        <div class="custom-container">
          <HeaderTitle title="Willkommen im Weird West" />
          <CharacterOverview />
          <button class="button" @click="sendMessage('test')" />
          <NavTabs />
          <nuxt />
          <LastRoll v-if="showLastRoll" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLogo from '~/components/header/HeaderLogo'
import HeaderTitle from '~/components/header/HeaderTitle'
import CharacterOverview from '~/components/meta/CharacterOverview'
import NavTabs from '~/components/navigation/NavTabs'
import LastRoll from '~/components/common/LastRoll'

const sendMessage = (msg) => {}

export default {
  components: { HeaderLogo, HeaderTitle, CharacterOverview, NavTabs, LastRoll },
  data() {
    return {
      sendMessagex() {
        return null
      }
    }
  },
  computed: {
    showLastRoll() {
      const lastRoll = this.$store.getters['chronicle/getLastRoll']
      const showLastRoll = this.$store.state.chronicle.showLastRoll
      return showLastRoll && typeof lastRoll !== 'undefined'
    },
    ...mapGetters({ charSave: 'charSave/charSave' })
  },
  watch: {
    charSave: {
      handler(charSave) {
        const parsed = JSON.stringify(this.charSave)
        localStorage.setItem('charSaveV2', parsed)
      },
      deep: true
    }
  },
  mounted() {
    const getSaveFromLocalStorge = () => {
      if (localStorage.getItem('charSaveV2')) {
        try {
          const charSave = JSON.parse(localStorage.getItem('charSaveV2'))
          this.$store.commit('charSave/loadFromSave', charSave)
        } catch (error) {
          console.error(error)
          console.error(localStorage.getItem('charSaveV2'))
        }
      } else if (localStorage.getItem('charSave')) {
        // convert old save -> TODO delete next week
        try {
          const charSave = JSON.parse(localStorage.getItem('charSave'))
          this.$store.commit('charSave/loadFromOldSave', charSave)
        } catch (error) {
          console.error(error)
          console.error(localStorage.getItem('charSave'))
        }
      }
    }
    getSaveFromLocalStorge()

    this.$store.dispatch('charSave/uniqueId')

    // const initalizeWebsocket = () => {
    //   const wsClient = new SockJS('https://deadlands-echo.herokuapp.com/echo')
    //   wsClient.onopen = function() {
    //     console.log('[WS] Connection opened')
    //     console.log(this.sendMessage)
    //     sendMessage = (msg) => {
    //       console.log(msg)
    //       wsClient.send(msg)
    //     }
    //   }
    //   wsClient.onmessage = function(e) {
    //     console.log('[WS] Message: ', e.data)
    //   }
    //   wsClient.onclose = function() {
    //     console.log('[WS] Connection closed')
    //   }
    // }
    // initalizeWebsocket()
    sendMessage('test')
  },
  methods: {
    sendMessage(msg) {
      sendMessage(msg)
    }
  }
}
</script>

<style>
:root {
  --clr-background: rgba(246, 196, 131, 0.867);
  --clr-1: #8c0712;
  --clr-2: #8c6927;
  --clr-3: rgb(228, 214, 188);
}

html {
  height: 100%;
}

body {
  background: url(~assets/images/bg.jpg) no-repeat center center fixed;
  background-size: cover;
  min-height: 100%;
  font-family: Oldenburg;
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  font-family: 'Oleo Script';
}

.custom-container {
  border: 1em solid transparent;
  border-radius: 1rem;
  background: var(--clr-background);
  margin-bottom: 20rem;
}

.custom-container-right {
  color: var(--clr-3);
}

.custom-container-right h3 {
  color: var(--clr-3);
}

.custom-number {
  color: var(--clr-2);
}

.custom-roll-popup {
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  padding: 1em;
}

.custom-roll-popup .message {
  -webkit-box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.3);
}
</style>
