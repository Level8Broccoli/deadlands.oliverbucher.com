<template>
  <div class="box">
    <h2 class="subtitle">Attribute</h2>
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <div v-for="(attribute, index) in attributeList" :key="index">
          <DiceShortcut
            :label="attribute.name"
            :has-more="true"
            @click-main="rollDice(attribute)"
            @click-more="openDiceModal(attribute)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiceShortcut from '~/components/common/DiceShortcut'

export default {
  name: 'AttributeShorthand',
  components: { DiceShortcut },
  computed: {
    attributeList() {
      return this.$store.getters['attributes/getList']
    }
  },
  methods: {
    openDiceModal(attribute) {
      const dicePool = {
        comment: attribute.name,
        dice: [{ type: this.currentValue(attribute), count: 1 }],
        options: {
          wildDice: true,
          showLastRoll: this.$route.name !== 'chronicle',
          explodingDice: true,
          showSuccessByFour: true
        }
      }
      this.$store.commit('diceModal/openModal', dicePool)
    },
    rollDice(attribute) {
      this.$store.dispatch('chronicle/rollDice', {
        comment: attribute.name,
        dice: [{ type: this.currentValue(attribute), count: 1 }],
        options: {
          wildDice: true,
          showLastRoll: this.$route.name !== 'chronicle',
          explodingDice: true,
          showSuccessByFour: true
        }
      })
    },
    currentValue(attribute) {
      const list = this.$store.state.charSave.attributeList
      const attributeSaved = list.find((e) => e.id === attribute.id)
      if (typeof attributeSaved !== 'undefined') {
        return attributeSaved.value
      }
      return 4
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
