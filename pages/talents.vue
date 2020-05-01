<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Suche dir die Talente aus, die deinen Charakter zu etwas ganz besonderem
      machen. Achte dabei jedoch auf die Spalte Voraussetzung!
    </p>
    <br />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Talente</h1>
          </th>
          <th>Tags</th>
          <th>Voraussetzungen</th>
        </tr>
        <talent-entry
          v-for="talent in talentList"
          :key="talent.id"
          :talent="talent"
        />
      </table>
    </div>
    <ButtonLegend />
  </div>
</template>

<script>
import ButtonLegend from '~/components/common/ButtonLegend'
import TalentEntry from '~/components/talents/TalentEntry'

export default {
  components: { TalentEntry, ButtonLegend },
  computed: {
    talentList() {
      return this.$store.getters['talents/getList']
    }
  },
  head() {
    return {
      title: 'Talente | ' + this.$store.state.title
    }
  }
}
</script>
