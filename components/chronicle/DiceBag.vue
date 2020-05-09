<template>
  <div class="box">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div><p class="title has-text-weight-bold">Würfel</p></div>
      </div>
      <div v-for="die in dice" :key="die" class="level-item has-text-centered">
        <div>
          <p class="title">
            <GameButton
              :title="'Wirf einen ' + die + ' Würfel'"
              button-type="text"
              :button-text="'W ' + die"
              :button-styles="['info', 'light']"
              @button-click="rollDice(die)"
            />
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            <GameButton
              title="Öffne die Würfelhilfe"
              button-type="text"
              button-text="Würfelhilfe"
              @button-click="openDiceModal"
            />
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'DiceBag',
  components: { GameButton },
  computed: {
    dice() {
      return this.$store.state.dice
    }
  },
  methods: {
    rollDice(die) {
      this.$store.dispatch('chronicle/rollDice', {
        comment: 'Manueller Wurf',
        dice: [{ type: die, count: 1 }],
        options: {
          wildDice: false,
          showLastRoll: false,
          explodingDice: true,
          showSuccessByFour: true
        }
      })
    },
    openDiceModal() {
      const dicePool = {
        comment: 'Manueller Wurf',
        dice: [],
        options: {
          wildDice: false,
          showLastRoll: false,
          explodingDice: true,
          showSuccessByFour: false
        }
      }
      this.$store.commit('diceModal/openModal', dicePool)
    }
  }
}
</script>
