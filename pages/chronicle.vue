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
        <dice-history-entry
          v-for="(dice, index) in chronicleList"
          :key="index"
          :dice="dice"
          @roll-dice="rollDice"
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

export default {
  components: { DiceBag },
  computed: {
    chronicleList() {
      return this.$store.state.chronicle.list
    }
  }
}
</script>
