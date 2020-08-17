<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Ein paar Fertigkeiten haben einen Startwert (blau markiert) von W4. Du
      kannst weitere Punkte verteilen, wie bei den Attributen.
      <br />
      <strong>
        Achtung: Die Fertigkeiten sind abhängig von je einem passenden Attribut.
        Wenn du eine Fertigkeit auf einen Wert steigerst, der den dazugehörigen
        Attributswert übersteigt, kostet das 2 Punkte!
      </strong>
      (leicht rot markiert)
    </p>
    <br />
    <div class="has-text-right is-italic">
      <label class="checkbox">
        <input v-model="showOnlyChoosenSkills" type="checkbox" />
        Zeige nur ausgewählte Fertigkeiten
      </label>
    </div>
    <br />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Fertigkeiten</h1>
          </th>
          <th v-for="die in dice" :key="die">
            <font-awesome-icon :icon="['fad', 'dice-d' + die]" />
            W{{ die }}
          </th>
        </tr>
        <SkillEntry
          v-for="skill in skillList"
          :key="skill.id"
          :skill="skill"
          :dice="dice"
        />
      </table>
    </div>
    <ButtonLegend />
  </div>
</template>

<script>
import SkillEntry from '~/components/skills/SkillEntry'
import ButtonLegend from '~/components/common/ButtonLegend'

export default {
  components: { SkillEntry, ButtonLegend },
  computed: {
    showOnlyChoosenSkills: {
      get() {
        return this.$store.state.charSave.showOnlyChoosenSkills
      },
      set(value) {
        this.$store.commit('charSave/setShowOnlyChoosenSkills', value)
      }
    },
    skillList() {
      if (this.showOnlyChoosenSkills) {
        return this.skillListFiltered
      }
      return this.$store.getters['skills/getList']
    },
    skillListFiltered() {
      const allSkills = this.$store.getters['skills/getList']
      const choosenSkillsId = this.$store.getters['charSave/getSkillList'].map(
        (skill) => skill.id
      )

      return allSkills.filter((skill) => {
        return skill.defaultValue || choosenSkillsId.includes(skill.id)
      })
    },
    dice() {
      return this.$store.state.dice
    }
  },
  head() {
    return {
      title: 'Fertigkeiten | ' + this.$store.state.title
    }
  }
}
</script>
