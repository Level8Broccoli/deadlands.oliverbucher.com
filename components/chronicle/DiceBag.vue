<template>
  <div class="box">
    <nav class="level">
      <div v-for="die in dice" :key="die" class="level-item has-text-centered">
        <div>
          <p class="title">
            <GameButton
              :button-icon="'dice-d' + die"
              :button-title="'Wirf einen ' + die + '-er Würfel'"
              :button-text="'W' + die"
              button-style="is-info is-light"
              @click.native="rollDice(die)"
            />
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            <GameButton
              button-icon="ellipsis-v"
              button-style="is-light"
              button-title="Öffne die Würfelhilfe"
              button-text="Würfelhilfe"
              @click.native="openDiceModal"
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
