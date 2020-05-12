<template>
  <div class="box">
    <h2 class="subtitle">Fertigkeiten</h2>
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <div v-for="(skill, index) in skillList" :key="index">
          <DiceShortcut
            :label="skill.name"
            :has-more="true"
            @click-main="rollDice(skill)"
            @click-more="openDiceModal(skill)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiceShortcut from '~/components/common/DiceShortcut'

export default {
  name: 'SkillShorthand',
  components: { DiceShortcut },
  computed: {
    skillList() {
      return this.$store.getters['skills/getList']
    }
  },
  methods: {
    openDiceModal(skill) {
      const comment = skill.name
      const dice = []
      dice.push({
        type: this.currentValue(skill) === 0 ? 4 : this.currentValue(skill),
        count: 1
      })
      const options = {
        wildDice: true,
        showLastRoll: this.$route.name !== 'chronicle',
        explodingDice: true,
        showSuccessByFour: true
      }
      const modifications = []

      if (this.currentValue(skill) === 0) {
        modifications.push({
          name: 'Ungeübt',
          value: -2
        })
      }
      const dicePool = {
        comment,
        dice,
        options,
        modifications
      }
      this.$store.commit('diceModal/openModal', dicePool)
    },
    rollDice(skill) {
      const comment = skill.name
      const dice = []
      dice.push({
        type: this.currentValue(skill) === 0 ? 4 : this.currentValue(skill),
        count: 1
      })
      const options = {
        wildDice: true,
        showLastRoll: this.$route.name !== 'chronicle',
        explodingDice: true,
        showSuccessByFour: true
      }
      const modifications = []

      if (this.currentValue(skill) === 0) {
        modifications.push({
          name: 'Ungeübt',
          value: -2
        })
      }

      this.$store.dispatch('chronicle/rollDice', {
        comment,
        dice,
        options,
        modifications
      })
    },
    currentValue(skill) {
      const list = this.$store.state.charSave.skillList
      const skillSaved = list.find((e) => e.id === skill.id)
      if (typeof skillSaved !== 'undefined') {
        return skillSaved.value
      }
      if (skill.defaultValue) {
        return 4
      }
      return 0
    }
  }
}
</script>

<style scoped>
.custom-flex-flow {
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
