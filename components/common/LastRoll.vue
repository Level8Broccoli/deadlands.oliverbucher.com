<template>
  <div class="container custom-roll-popup">
    <article class="message" :class="colorOfResult">
      <div class="message-header">
        <p>Letzter Wurf</p>
        <button
          class="delete"
          aria-label="delete"
          @click="showLastRoll = false"
        ></button>
      </div>
      <div class="message-body">
        <div class="table-container">
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
            <DiceRollResultEntry :entry="lastRoll" />
          </table>
        </div>
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
import DiceRollResultEntry from '~/components/chronicle/DiceRollResultEntry'

export default {
  name: 'LastRoll',
  components: { DiceRollResultEntry },
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
      return this.$store.getters['chronicle/getLastRoll']
    },
    colorOfResult() {
      const result = this.lastRoll.payload.rollResult.effects
      if (result.raise > 0) {
        return 'is-primary'
      }
      if (result.success) {
        return 'is-success'
      }
      if (result.critFailure) {
        return 'is-danger'
      }
      return 'is-warning'
    }
  }
}
</script>
