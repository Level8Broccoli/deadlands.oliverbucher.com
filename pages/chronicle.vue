<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Hier befindet sich die Chronik der aktuellen Spielrunde
      <em>(wird nicht gespeichert)</em>.
    </p>
    <DiceBag />
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
    </div>
  </div>
</template>

<script>
import DiceBag from '~/components/chronicle/DiceBag'
import DiceRollResultEntry from '~/components/chronicle/DiceRollResultEntry'

export default {
  components: { DiceBag, DiceRollResultEntry },
  computed: {
    chronicleList() {
      return this.$store.state.chronicle.list
    }
  },
  head() {
    return {
      title: 'Chronik | ' + this.$store.state.title
    }
  }
}
</script>
