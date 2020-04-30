<template>
  <div class="container custom-roll-popup">
    <article v-show="showLastRoll" class="message">
      <div class="message-header">
        <p>Letzter Wurf</p>
        <button
          class="delete"
          aria-label="delete"
          @click="showLastRoll = false"
        ></button>
      </div>
      <div class="message-body">
        <table class="table is-striped is-hoverable is-fullwidth">
          <tr>
            <th></th>
            <th>Beschreibung</th>
            <th>Wurf</th>
            <th>Wild Die (W6)</th>
            <th>Modifikationen</th>
            <th>Ergebnis</th>
            <th></th>
          </tr>
          <ChronicleEntry v-if="lastRoll" :dice="lastRoll" />
        </table>

        <div class="has-text-right">
          <NuxtLink to="/chronicle">
            <span class="tag">zur Würfelchronik &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import ChronicleEntry from '~/components/chronicle/ChronicleEntry'

export default {
  name: 'LastRoll',
  components: { ChronicleEntry },
  computed: {
    showLastRoll: {
      get() {
        return this.$store.state.chronicle.showLastRoll
      },
      set(value) {
        this.$store.commit('chronicle/setShowLastRoll', value)
      }
    },
    lastRoll() {
      return this.$store.state.chronicle.showLastRoll[0]
    }
  }
}
</script>
