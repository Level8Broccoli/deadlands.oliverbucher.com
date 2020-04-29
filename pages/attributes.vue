<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Die 5 Attribute beginnen alle bei einem <strong>W4</strong> Würfel. Pro
      Punkt kannst du ein Attribut um einen Würfel verbessern.<br /><em
        >Beispiel: W4 -&gt; W8 kostet dich 2 Punkte.</em
      >
    </p>
    <br />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Attribute</h1>
          </th>
          <th v-for="die in dice" :key="die">W{{ die }}</th>
        </tr>
        <AttributeEntry
          v-for="attribute in attributesList"
          :key="attribute.id"
          :attribute="attribute"
          :dice="dice"
        />
      </table>
    </div>
    <ButtonLegend />
  </div>
</template>

<script>
import AttributeEntry from '~/components/attributes/AttributeEntry'
import ButtonLegend from '~/components/meta/ButtonLegend'

export default {
  components: { AttributeEntry, ButtonLegend },
  computed: {
    attributesList() {
      return this.$store.getters['attributes/getList']
    },
    dice() {
      return this.$store.state.dice
    }
  }
}
</script>
