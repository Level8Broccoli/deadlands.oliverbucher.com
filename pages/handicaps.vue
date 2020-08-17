<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Wähle hier deine Handicaps. Leichte Handicaps sind 1 Punkt Wert (grau),
      schwere Handicaps 2 (rot).
    </p>
    <br />
    <div class="has-text-right is-italic">
      <label class="checkbox">
        <input v-model="showOnlyChoosenHandicaps" type="checkbox" />
        Zeige nur ausgewählte Handicaps
      </label>
    </div>
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
import ButtonLegend from '~/components/common/ButtonLegend'

export default {
  components: { HandicapEntry, ButtonLegend },
  computed: {
    showOnlyChoosenHandicaps: {
      get() {
        return this.$store.state.charSave.showOnlyChoosenHandicaps
      },
      set(value) {
        this.$store.commit('charSave/setShowOnlyChoosenHandicaps', value)
      }
    },
    handicapList() {
      if (this.showOnlyChoosenHandicaps) {
        return this.handicapListFiltered
      }
      return this.$store.getters['handicaps/getList']
    },
    handicapListFiltered() {
      const allHandicaps = this.$store.getters['handicaps/getList']
      const choosenHandicapsId = this.$store.getters[
        'charSave/getHandicapList'
      ].map((handicap) => handicap.id)

      return allHandicaps.filter((skill) => {
        return skill.defaultValue || choosenHandicapsId.includes(skill.id)
      })
    }
  },
  head() {
    return {
      title: 'Handicaps | ' + this.$store.state.title
    }
  }
}
</script>
