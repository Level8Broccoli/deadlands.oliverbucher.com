<template>
  <div>
    <form @submit="sendChatMessage">
      <div class="field has-addons">
        <p class="control">
          <span class="select is-primary">
            <select v-model="chronicleLimit">
              <option v-for="(limit, index) in limits" :key="index">{{
                limit
              }}</option>
            </select>
          </span>
        </p>
        <p class="control is-expanded">
          <input
            v-model="chatText"
            class="input is-primary"
            type="text"
            placeholder="Deine Nachricht"
          />
        </p>
        <p class="control">
          <a class="button is-primary" @click="sendChatMessage">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
          </a>
        </p>
      </div>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  name: 'ChatForm',
  data() {
    return { chatText: '', limits: [10, 25, 50, 'Alle'] }
  },
  computed: {
    chronicleLimit: {
      get() {
        return this.$store.state.chronicle.chronicleLimit
      },
      set(value) {
        this.$store.commit('chronicle/setChronicleLimit', value)
      }
    }
  },
  methods: {
    sendChatMessage(e) {
      if (this.chatText.length > 0 && this.chatText.length < 500) {
        this.$store.dispatch('chronicle/commitOwnAction', {
          meta: { type: 'chatEntry' },
          payload: { message: this.chatText }
        })
        this.chatText = ''
      }
      e.preventDefault()
    }
  }
}
</script>
