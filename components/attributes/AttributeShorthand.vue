<template>
  <div class="box">
    <h2 class="subtitle">Attribute</h2>
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <div v-for="(attribute, index) in attributeList" :key="index">
          <DiceShorthand
            :dice-pool="dicePool(attribute)"
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
import DiceShorthand from '~/components/common/DiceShorthand'

export default {
  name: 'AttributeShorthand',
  components: { DiceShorthand },
  computed: {
    attributeList() {
      return this.$store.getters['attributes/getList']
    }
  },
  methods: {
    dicePool(attribute) {
      return {
        comment: attribute.name,
        dice: [{ type: this.currentValue(attribute), count: 1 }],
        options: {
          wildDice: true,
          showLastRoll: this.$route.name !== 'chronicle',
          explodingDice: true,
          showSuccessByFour: true
        }
      }
    },
    openDiceModal(attribute) {
      this.$store.commit('diceModal/openModal', this.dicePool(attribute))
    },
    rollDice(attribute) {
      this.$store.dispatch('chronicle/rollDice', this.dicePool(attribute))
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
