<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Führe hier deine Ausrüsung auf.
    </p>
    <br />
    <GameButton button-type="plus" @button-click="formOpen = true" />
    <br />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th>#</th>
          <th>
            <h1 class="subtitle">Ausrüstung</h1>
          </th>
          <th colspan="2" class="has-text-right">Wert</th>
          <th>Aktionen</th>
        </tr>
        <GearEntry
          v-if="gearList.length === 0 || formOpen"
          mode="new"
          @close-form="formOpen = false"
        />
        <GearEntry
          v-for="(gear, index) in gearList"
          :key="index"
          :gear="gear"
        />
      </table>
    </div>
  </div>
</template>

<script>
import GearEntry from '~/components/gear/GearEntry'
import GameButton from '~/components/common/GameButton'

export default {
  components: { GearEntry, GameButton },
  data() {
    return { formOpen: false }
  },
  computed: {
    gearList() {
      return this.$store.getters['charSave/getGearList']
    }
  },
  head() {
    return {
      title: 'Ausrüstung | ' + this.$store.state.title
    }
  }
}
</script>
