<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Wähle hier deine Handicaps. Leichte Handicaps sind 1 Punkt Wert (grau),
      schwere Handicaps 2 (rot).
    </p>
    <br />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th>
            <h1 class="subtitle">Handicaps</h1>
          </th>
          <th>Tags</th>
          <th>Leicht</th>
          <th>Schwer</th>
        </tr>
        <HandicapEntry
          v-for="handicap in handicapList"
          :key="handicap.id"
          :handicap="handicap"
        />
      </table>
    </div>
    <ButtonLegend />
  </div>
</template>

<script>
import HandicapEntry from '~/components/handicaps/HandicapEntry'
import ButtonLegend from '~/components/meta/ButtonLegend'

export default {
  components: { HandicapEntry, ButtonLegend },

  computed: {
    handicapList() {
      return this.$store.getters['handicaps/getList']
    }
  },
  head() {
    return {
      title: 'Handicaps | ' + this.$store.state.title
    }
  }
}
</script>
