<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Hier befindet sich die Chronik der aktuellen Spielrunde
      <em>(wird nicht gespeichert)</em>.
    </p>
    <DiceBag />
    <ChatForm />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Chronik</h1>
          </th>
          <th>Wurf</th>
          <th>Wild Die (W6)</th>
          <th>Modifikationen</th>
          <th>Ergebnis</th>
          <th></th>
        </tr>
        <DiceRollResultEntry
          v-for="(entry, index) in chronicleList"
          :key="index"
          :entry="entry"
        />
        <tr v-if="chronicleList.length === 0">
          <td></td>
          <td colspan="6">
            <span class="is-italic">Chronik leer</span>
          </td>
        </tr>
      </table>

      <div class="has-text-right">
        <small>
          {{ wsState }}
          <font-awesome-icon :icon="['fas', wsSymbol]" />
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import DiceBag from '~/components/chronicle/DiceBag'
import DiceRollResultEntry from '~/components/chronicle/DiceRollResultEntry'
import ChatForm from '~/components/chronicle/ChatForm'

export default {
  components: { DiceBag, DiceRollResultEntry, ChatForm },
  computed: {
    chronicleList() {
      return this.$store.getters['chronicle/getList']
    },
    wsState() {
      const wsState = this.$store.state.chronicle.wsConnection
      return wsState ? 'verbunden' : 'Verbindung geschlossen'
    },
    wsSymbol() {
      const wsState = this.$store.state.chronicle.wsConnection
      return wsState ? 'signal' : 'ban'
    }
  },
  mounted() {
    this.$store.commit('chronicle/setShowLastRoll', false)
  },
  head() {
    return {
      title: 'Chronik | ' + this.$store.state.title
    }
  }
}
</script>
