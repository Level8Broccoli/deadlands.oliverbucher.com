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
          <th>W4</th>
          <th>W6</th>
          <th>W8</th>
          <th>W10</th>
          <th>W12</th>
        </tr>
        <AttributeEntry
          v-for="attribute in attributesList"
          :key="attribute.id"
          :attribute="attribute"
        />
        <!-- @button-click="buttonClick"
          @roll-dice="rollDice" -->
      </table>
    </div>
    <ButtonLegend />
  </div>
</template>

<script>
import AttributeEntry from '~/components/attribute/AttributeEntry'
import ButtonLegend from '~/components/meta/ButtonLegend'

export default {
  components: { AttributeEntry, ButtonLegend },
  computed: {
    attributesList() {
      return this.$store.state.attributes.list
    }
  }
}
</script>
