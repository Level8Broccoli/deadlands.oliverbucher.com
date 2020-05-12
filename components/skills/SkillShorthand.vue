<template>
  <div class="box">
    <h2 class="subtitle">Fertigkeiten</h2>
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <div v-for="(skill, index) in skillList" :key="index">
          <DiceShorthand
            :dice-pool="dicePool(skill)"
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
import DiceShorthand from '~/components/common/DiceShorthand'

export default {
  name: 'SkillShorthand',
  components: { DiceShorthand },
  computed: {
    skillList() {
      return this.$store.getters['skills/getList']
    }
  },
  methods: {
    dicePool(skill) {
      return {
        comment: skill.name,
        dice: [
          {
            type: this.currentValue(skill) === 0 ? 4 : this.currentValue(skill),
            count: 1
          }
        ],
        options: {
          wildDice: true,
          showLastRoll: this.$route.name !== 'chronicle',
          explodingDice: true,
          showSuccessByFour: true
        },
        modifications:
          this.currentValue(skill) === 0
            ? [
                {
                  name: 'Ungeübt',
                  value: -2
                }
              ]
            : []
      }
    },
    openDiceModal(skill) {
      this.$store.commit('diceModal/openModal', this.dicePool(skill))
    },
    rollDice(skill) {
      this.$store.dispatch('chronicle/rollDice', this.dicePool(skill))
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
