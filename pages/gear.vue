<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Führe hier deine Ausrüsung auf.
    </p>
    <br />
    <GameButton button-preset="add" @click.native="openEmptyForm" />
    <br />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <GearEntryForm
          v-if="gearList.length === 0 || formOpen"
          :gear="currentGear"
          :gear-list-count="gearList.length"
          @exit-form="exitForm"
          @save-gear="saveGear"
        />
        <tr>
          <th>Anzahl</th>
          <th>
            <h1 class="subtitle">Ausrüstung</h1>
          </th>
          <th colspan="2" class="has-text-right">Wert</th>
          <th class="has-text-right">Aktionen</th>
        </tr>
        <GearEntry
          v-for="(gear, index) in gearList"
          :key="index"
          :gear="gear"
          @edit-gear="editGear(gear)"
        />
        <tfoot v-if="totalValue > 0">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td class="has-text-right has-text-weight-bold">
              {{ showTwoDecimals(totalValue) }}$
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import GearEntry from '~/components/gear/GearEntry'
import GearEntryForm from '~/components/gear/GearEntryForm'
import GameButton from '~/components/common/GameButton'

export default {
  components: { GearEntry, GearEntryForm, GameButton },
  data() {
    return {
      formOpen: false,
      currentGear: { count: 1, name: '', descr: '', value: 0 }
    }
  },
  computed: {
    gearList() {
      return this.$store.getters['charSave/getGearList']
    },
    totalValue() {
      return this.$store.getters['charSave/getGearTotal']
    }
  },
  methods: {
    editGear(gear) {
      this.currentGear = gear
      this.formOpen = true
    },
    saveGear(gear) {
      this.$store.dispatch('charSave/modifyGear', gear)
    },
    openEmptyForm() {
      this.resetForm()
      this.formOpen = true
    },
    exitForm() {
      this.resetForm()
      this.formOpen = false
    },
    resetForm() {
      this.currentGear = {
        count: 1,
        name: '',
        descr: '',
        value: 0
      }
    },
    showTwoDecimals(num) {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
  },
  head() {
    return {
      title: 'Ausrüstung | ' + this.$store.state.title
    }
  }
}
</script>
