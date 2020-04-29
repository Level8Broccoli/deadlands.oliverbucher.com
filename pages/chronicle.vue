<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Hier befindet sich die Chronik der aktuellen Spielrunde
      <em>(wird nicht gespeichert)</em>.
    </p>
    <DiceBag />
    <div class="table-container">
      <custom-dice
        @roll-dice="rollDice"
        @clear-dice-history="clearDiceHistory"
        @button-click="clickAttribute(attribute, die)"
      />
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
        <ChronicleEntry
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
import ChronicleEntry from '~/components/chronicle/ChronicleEntry'

export default {
  components: { DiceBag, ChronicleEntry },
  computed: {
    chronicleList() {
      return this.$store.state.chronicle.list
    }
  }
}
</script>
