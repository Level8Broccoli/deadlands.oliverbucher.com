<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Hier findest eine Übersicht der Mächte.
    </p>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Machtpunkte Aktuell</label>
          <div class="control">
            <input v-model="powerPointsCurrent" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Machtpunkte Maximum</label>
          <div class="control">
            <input v-model="powerPointsMax" type="text" class="input" />
          </div>
        </div>
      </div>
    </div>
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Mächte</h1>
          </th>
          <th>Zusammenfassung</th>
        </tr>
        <PowerEntry v-for="power in powerList" :key="power.id" :power="power" />
      </table>
    </div>
    <ButtonLegend />
  </div>
</template>

<script>
import PowerEntry from '~/components/powers/PowerEntry'
import ButtonLegend from '~/components/common/ButtonLegend'

export default {
  components: { ButtonLegend, PowerEntry },
  computed: {
    powerList() {
      return this.$store.getters['powers/getList']
    },
    powerPointsCurrent: {
      get() {
        return this.$store.state.charSave.powerPointsCurrent
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsCurrent', value)
      }
    },
    powerPointsMax: {
      get() {
        return this.$store.state.charSave.powerPointsMax
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsMax', value)
      }
    }
  }
}
</script>
